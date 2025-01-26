import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';
import { PokemonDetail } from '../models/pokemon';
import { LocalPokemon } from '../models/local-pokemon';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  standalone: false,
})
export class PokemonDetailPage implements OnInit {
  isLoading = true;
  pokedexIndex: number;
  pokemon: PokemonDetail | undefined;
  isFavorite = false;

  constructor(
    private service: APIService, 
    private router: Router, 
    private storageService: StorageService
  ) {
    let state = this.router.getCurrentNavigation()?.extras?.state;
    this.pokedexIndex = state ? state['pokedexIndex'] : 1;
   }

  async ngOnInit() {
    this.fetchPokemonDetail();
    await this.checkIfExistOnLocal();
  }

  fetchPokemonDetail() {
    this.service.getPokemonDetails(this.pokedexIndex).subscribe({
      next: (data) => {
        this.pokemon = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  async checkIfExistOnLocal() {
    this.isFavorite = await this.storageService.isExist(this.pokedexIndex.toString());
    console.log(`this favorite? ${this.isFavorite}`);
  }

  async toggleFavorite() {
    if (this.isFavorite) {
      await this.storageService.remove(this.pokedexIndex.toString());
      this.isFavorite = false;
    } else {
      let localPokemon: LocalPokemon= {
        pokemon: {
          name: this.pokemon?.name ?? "", 
          pokedexIndex: this.pokedexIndex
        },
        pokemonDetail: this.pokemon
      }
      await this.storageService.set(this.pokedexIndex.toString(), localPokemon);
      this.isFavorite = true
    }
  }
}

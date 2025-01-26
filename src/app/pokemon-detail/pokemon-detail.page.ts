import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';
import { PokemonDetail } from '../models/pokemon';

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
  isFavorite = true;

  constructor(private service: APIService, private router: Router) {
    let state = this.router.getCurrentNavigation()?.extras?.state;
    this.pokedexIndex = state ? state['pokedexIndex'] : 1;
   }

  ngOnInit() {
    this.fetchPokemonDetail();
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
}

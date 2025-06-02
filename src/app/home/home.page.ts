import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { InfiniteScrollCustomEvent, NavController } from '@ionic/angular';
import { PokemonHome } from '../models/local-pokemon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  isLoading = true;
  offset = 0;
  pokemons: PokemonHome[] = [];
  selectedType: Number | null = null;

  constructor(private service: APIService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(limit = 20) {
    this.isLoading = true;
    this.selectedType = null;
    this.pokemons = [];
    this.service.getPokemonList(limit, this.offset).subscribe({
      next: (data) => {
        const pokemonHome = data.results.map((pokemon) => {
          var url = pokemon.url.replace(/\/$/, '');
          url = url.substring(url.lastIndexOf('/') + 1);
          
          return {
            "name": pokemon.name,
            "pokedexIndex": Number(url)
          };
        })
        this.pokemons = this.pokemons.concat(pokemonHome);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.offset += 20;
        this.isLoading = false;
      }
    });
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.loadData();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  onFilterSelected(selectedType: number): void {
    console.log('Selected Pokemon type:', selectedType);
    this.offset = 0;
    this.isLoading = true;
    this.selectedType = selectedType;
    this.service.getPokemonListByType(selectedType).subscribe({
      next: (data) => {
        console.log(data.pokemon);
        this.pokemons = data.pokemon.map( (pokemon) => {
          var url = pokemon.pokemon.url.replace(/\/$/, '');
          url = url.substring(url.lastIndexOf('/') + 1);
          return {
            "name": pokemon.pokemon.name,
            "pokedexIndex": Number(url)
          };
        });
        console.log(this.pokemons[1].name);
        
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }
}

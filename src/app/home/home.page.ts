import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { InfiniteScrollCustomEvent, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  offset = 0;
  pokemons: Pokemon[] = [];

  constructor(private service: APIService, private navController: NavController) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(limit = 20) {
    this.service.getPokemonList(limit, this.offset).subscribe({
      next: (data) => {
        this.pokemons = this.pokemons.concat(data.results);
        console.log(this.pokemons);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.offset += 20;
      }
    });
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.loadData();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  navigateToPokemonDetail(id: number) {
    this.navController.navigateForward('pokemon-detail', { state: {"id": id} });
  }
}

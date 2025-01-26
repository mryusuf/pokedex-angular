import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/apiservice';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  offset = 0;
  pokemons: Pokemon[] = [];
  pokepokemons$!: Observable<Pokemon[]>;
  //loadingSubject: BehaviorSubject<boolean> = BehaviorSubject<boolean>();
  constructor(private service: APIService) {}

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
}

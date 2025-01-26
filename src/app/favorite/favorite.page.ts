import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { LocalPokemon } from '../models/local-pokemon';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favorite',
  templateUrl: 'favorite.page.html',
  styleUrls: ['favorite.page.scss'],
  standalone: false,
})
export class FavoritePage implements OnInit {
  localPokemons: LocalPokemon[] = []
  isLoading = true

  constructor(
    private storageService: StorageService, 
    private navController: NavController
  ) {}

  async ngOnInit() {
    await this.storageService.init();
  }

  async ionViewWillEnter() {
    await this.fetchLocalPokemon();
    await this.subscribeToStorageChange();
  }

  async fetchLocalPokemon() {
    this.localPokemons = await this.storageService.getAllData();
    this.isLoading = false;
  }

  async subscribeToStorageChange() {
    this.storageService.watchStorage().subscribe({
      next: () => {
        this.fetchLocalPokemon();
      }
    })
  }

  navigateToPokemonDetail(id: number) {
    this.navController.navigateForward('pokemon-detail', { state: {"pokedexIndex": id} });
  }
}

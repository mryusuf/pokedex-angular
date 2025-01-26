import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FavouriteService {
  private favourites = new Set<string>();

  constructor() {
    // Initialize from local storage
    const savedFavourites = localStorage.getItem('favourites');
    if (savedFavourites) {
      this.favourites = new Set(JSON.parse(savedFavourites));
    }
  }

  add(pokemonIndex: number): void {
    this.favourites.add(pokemonIndex.toString());
    localStorage.setItem('favourites', JSON.stringify(Array.from(this.favourites)));
  }

  remove(id: string): void {
    this.favourites.delete(id);
    localStorage.setItem('favourites', JSON.stringify(Array.from(this.favourites)));
  }

  contains(id: string): boolean {
    return this.favourites.has(id);
  }
}
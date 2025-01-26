import { Injectable } from '@angular/core';

import { Drivers } from '@ionic/storage';
import { Storage } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { LocalPokemon } from '../models/local-pokemon';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private storageSub = new Subject<string>();

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = new Storage({
        driverOrder: [cordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
    });
    await storage.defineDriver(cordovaSQLiteDriver);
    await storage.create();
    this._storage = storage;
  }

  watchStorage(): Observable<string> {
    return this.storageSub.asObservable();
  }

  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
    this.storageSub.next('added');
  }

  public async isExist(key: string): Promise<boolean> {
    const value = await this._storage?.get(key);
    if (value) {
        return true;
    }
    return false;
  }

  public async remove(key: string) {
    await this._storage?.remove(key);
    this.storageSub.next('removed');
  }

  public async getAllData(): Promise<LocalPokemon[]> {
    var localPokemons: LocalPokemon[] = [];
    this._storage?.forEach((value) => {
        localPokemons.push(value);
    });;
    return localPokemons;
  }
}
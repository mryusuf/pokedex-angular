import { Injectable } from '@angular/core';

import { Drivers } from '@ionic/storage';
import { Storage } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

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

  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
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
  }
}
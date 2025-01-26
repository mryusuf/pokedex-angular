import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription, BehaviorSubject } from "rxjs";
import { Pokemon, PokemonDetail, PokemonListResponse } from "../models/pokemon";

@Injectable({providedIn: 'root'})
export class APIService {
    private baseURL = 'https://pokeapi.co/api/v2';
    
    constructor(private http: HttpClient) {}

    getPokemonList(limit: number, offset: number): Observable<PokemonListResponse> {
        return this.http.get<PokemonListResponse>(`${this.baseURL}/pokemon?limit=${limit}&offset=${offset}`);
    }

    getPokemonDetails(id: number): Observable<PokemonDetail> {
        return this.http.get<Pokemon>(`${this.baseURL}/pokemon/${id}`);
    }
}
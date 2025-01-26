import { PokemonDetail } from "./pokemon";

export interface LocalPokemon {
    pokemon: PokemonHome;
    pokemonDetail?: PokemonDetail
}

export interface PokemonHome {
    name: string;
    pokedexIndex: number
}
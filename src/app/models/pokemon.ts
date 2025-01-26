export interface PokemonListResponse {
    count: number;
    results: Pokemon[];
}
export interface Pokemon {
    name: string;
    url: string
}
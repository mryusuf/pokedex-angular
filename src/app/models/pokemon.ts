export interface PokemonListResponse {
    count: number;
    results: Pokemon[];
}
export interface Pokemon {
    name: string;
    url: string
}
export interface PokemonDetail {
    abilities?:                Ability[];
    base_experience?:          number;
    cries?:                    Cries;
    forms?:                    Species[];
    game_indices?:             GameIndex[];
    height?:                   number;
    held_items?:               any[];
    id?:                       number;
    is_default?:               boolean;
    location_area_encounters?: string;
    moves?:                    Move[];
    name?:                     string;
    order?:                    number;
    species?:                  Species;
    stats?:                    Stat[];
    types?:                    Type[];
    weight?:                   number;
}

export interface Ability {
    ability?:   Species;
    is_hidden?: boolean;
    slot?:      number;
}

export interface Species {
    name?: string;
    url?:  string;
}

export interface Cries {
    latest?: string;
    legacy?: string;
}

export interface GameIndex {
    game_index?: number;
    version?:   Species;
}

export interface Move {
    move?:                Species;
    version_group_details?: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at?:  number;
    move_learn_method?: Species;
    version_group?:    Species;
}

export interface Stat {
    base_stat?: number;
    effort?:   number;
    stat?:     Species;
}

export interface Type {
    slot?: number;
    type?: Species;
}

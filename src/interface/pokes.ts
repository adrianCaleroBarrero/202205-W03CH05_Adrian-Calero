export interface iComponent {
    template: string;
    createTemplate(): string;
}

export interface iPoke {
    name: string;
    url: string;
}

export interface iCollect {
    count: number;
    next: string;
    previous: null | string;
    results: Array<iPoke>;
}

export interface iPokemons {
    name: string;
    id: number;
    sprites: { other: { home: { front_default: string } } };
}

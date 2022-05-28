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

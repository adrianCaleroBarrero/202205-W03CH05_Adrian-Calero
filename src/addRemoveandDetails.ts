import { iPokemons } from './interface/pokes.js';
import { DetailClass } from './models/detailClass.js';
import { fetchMyPoke } from './server/myCollection.js';
import { onePokemon } from './server/pokeApi.js';

export const addPokemon = async (click: any) => {
    const list = await onePokemon();
    let button = click.target.id;
    let pokemon;
    let pokemons = Promise.all(list);
    (await pokemons).forEach((item) => {
        if (JSON.stringify(item.id) === button) {
            pokemon = item;
        }
    });
    let infoPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        sprites: pokemon.sprites.other.home.front_default,
    };

    const response = await fetch('http://localhost:3000/pokemon', {
        method: 'POST',
        body: JSON.stringify(infoPokemon),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const pokeData = await response.json();
    return pokeData;
};

export const removePokemon = async (click) => {
    const list = await fetchMyPoke();
    let button = click.target.id;
    let myPokemon;
    (await list).forEach((pokemon: iPokemons) => {
        if (JSON.stringify(pokemon.id) === button) {
            myPokemon = pokemon;
        }
    });
    const response = await fetch(
        'http://localhost:3000/pokemon' + `/${myPokemon.id}`,
        {
            method: 'DELETE',
        }
    );
    const pokeData = await response.json();
    return pokeData;
};

export const detailPokemon = async (click) => {
    const list = await onePokemon();
    let button = click.target.id;
    let pokemon;
    let pokemons = Promise.all(list);
    (await pokemons).forEach((item) => {
        if (item.name === button) {
            pokemon = item;
        }
    });
    const infoPoke = {
        sprites: pokemon.sprites.front_default,
        name: pokemon.name,
        id: pokemon.id,
        height: pokemon.height,
        weight: pokemon.weight,
    };
    new DetailClass('.pokedex', infoPoke);
};

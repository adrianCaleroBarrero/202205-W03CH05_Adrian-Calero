import { fetchMyPoke } from './server/myCollection';

export const removePokemon = async (click: any) => {
    const list = await fetchMyPoke();
    console.log(list);
    // let button = click.target.id;
    // let pokemon;
    // let pokemons = Promise.all(list);
    // (await pokemons).forEach((item) => {
    //     if (JSON.stringify(item.id) === button) {
    //         pokemon = item;
    //     }
    // });
    // let infoPokemon = {
    //     id: pokemon.id,
    //     name: pokemon.name,
    //     sprites: pokemon.sprites.other.home.front_default,
    // };

    // const response = await fetch('http://localhost:3000/pokemon', {
    //     method: 'POST',
    //     body: JSON.stringify(infoPokemon),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });
    // const pokeData = await response.json();
    // return pokeData;
};

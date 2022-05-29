import { iPokemons } from './interface/pokes.js';
export const localPokemon = () => {
    console.log('hola');
    // const response = await fetch('http://localhost:3000/pokemon', {
    //     method: 'POST',
    //     body: JSON.stringify(),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });
    // const pokeData = await response.json();
    // console.log(pokeData);
};

export function addHandlerButton(item: iPokemons) {
    let plus = document.getElementById(`${item.id}`)!;
    plus.addEventListener('click', localPokemon);
}

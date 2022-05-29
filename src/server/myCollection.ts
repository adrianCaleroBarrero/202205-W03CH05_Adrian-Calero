export const fetchMyPoke = async () => {
    const response = await fetch('http://localhost:3000/pokemon');
    const pokeData = await response.json();
    return pokeData;
};

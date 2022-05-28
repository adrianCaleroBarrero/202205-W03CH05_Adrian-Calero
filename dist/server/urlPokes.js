export const pokeCollect = async (poke) => {
    const urlPokes = await poke;
    const urls = urlPokes.results.map((item) => {
        return item.url;
    });
    return urls;
};

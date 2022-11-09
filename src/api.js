export const searchPokemon = async (pokemon) => {
  try {
    // let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    // let url = `http://localhost:8080/pokemon/${pokemon}`;
    let url = `https://api-dev.terpel.com/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemons = async (limit = 12, offset = 0) => {
  try {
    // let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    let url = `https://api-dev.terpel.com/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

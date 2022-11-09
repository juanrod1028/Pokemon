import React from "react";
import { searchPokemon } from "../api";
const { useState } = React;

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (event) => {
    setSearch(event.target.value);
  };
  const onClick = async (event) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon" onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
      <div>
        {pokemon && (
          <div>
            <div>Nombre: {pokemon.name}</div>
            <div>Peso: {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;

import { useState } from "react";
import sleep from "sleep-promise";
import { wrapPromise } from "../../utils/wrapPromise";

const fetchPokemon = (id = 1) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then(sleep(500));
};

let initialPokemon = wrapPromise(fetchPokemon(1));

export const PokemonDetail = () => {
  const [pokemonResource, setPokemonResource] = useState(initialPokemon);

  const pokemon = pokemonResource.read();

  return (
    <div>
      <h3>{pokemon.name}</h3>
      <button onClick={() => setPokemonResource(wrapPromise(fetchPokemon(pokemon.id + 1)))}>
        Next
      </button>
    </div>
  );
};

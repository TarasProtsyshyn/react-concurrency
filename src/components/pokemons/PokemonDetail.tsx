import { useState, useTransition } from "react";
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
  const [isPending, setTransition] = useTransition();

  const pokemon = pokemonResource.read();

  return (
    <div>
      <h3>{isPending ? "loading..." : pokemon.name}</h3>
      <button
        disabled={isPending}
        onClick={() =>
          setTransition(() => setPokemonResource(wrapPromise(fetchPokemon(pokemon.id + 1))))
        }
      >
        Next
      </button>
    </div>
  );
};

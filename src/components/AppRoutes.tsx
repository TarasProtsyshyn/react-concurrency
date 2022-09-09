import { useRoutes } from "react-router";
import { PrimeNumbers } from "./primes/PrimeNumbers";
import { Pokemons } from "./pokemons/Pokemons";

export function AppRoutes() {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <div className="row">
          <h2 className="text-center mt-5">Concurrent Rendering Feature</h2>
        </div>
      ),
    },
    { path: "/pokemons", element: <Pokemons /> },
    { path: "/primes", element: <PrimeNumbers /> },
  ]);

  return element;
}

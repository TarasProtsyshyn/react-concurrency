import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "../ErrorFallback";
import { Loading } from "../Loading";
import { PokemonDetail } from "./PokemonDetail";

export const Pokemons = () => {
  return (
    <div>
      <h1>Just fetch pokemon</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading />}>
          <PokemonDetail />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

import { useRoutes } from 'react-router';
import { PrimeNumbers } from './primes/PrimeNumbers';

export function AppRoutes() {
  const element = useRoutes([
    {
      path: '/',
      element: (
        <div className="row">
          <h2 className="text-center mt-5">
            Concurrent Rendering Feature
          </h2>
        </div>
      ),
    },
    { path: '/pokemons', element:<h2>pokemon</h2> },
    { path: '/primes', element: <PrimeNumbers /> },
  ]);

  return element;
}

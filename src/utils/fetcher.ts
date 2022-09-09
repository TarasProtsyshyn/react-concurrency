import { wrapPromise } from "./wrapPromise";

export function fetchData(url: string) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);

  return wrapPromise(promise);
}

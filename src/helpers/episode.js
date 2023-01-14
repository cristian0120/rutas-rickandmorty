export const episode = () => {
  return fetch("https://rickandmortyapi.com/api/character/1").then((response) =>
    response.json()
  );
};

import { useEffect, useState } from "react";

export const Episode = () => {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await response.json();
      setEpisode(data.results);
    }
    fetch("https://rickandmortyapi.com/api/character/1")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
    fetchData();
  }, []);
  
  

  return (
    <>
      <h1>RICKY AND MORTY</h1>
      {episode.map((character) => {
        return (
          <div key={character.id}>
            <h2> NAME Character : {character.name}</h2>
            <h2>DATE Character : {character.air_date}</h2>
            <h2>Episode : {character.episode}</h2>
       <img src={character.url} alt={character.name} />    
          </div>
        );
      })}
    </>
  );
};

import React, { useState, useEffect } from "react";
import Character from "./Character";
const List = () => {
  const [characters, setCharacters] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://rickandmortyapi.com/api/character");

        const { results } = await data.json();
        setCharacters(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [characters.length]);
  return (
    <div>
      
      <h2>Characters</h2>
      <hr />
      <div className="row">
        {Loading ? (
          <div>Loading</div>
        ) : (
          characters.map((character) => (
            <Character
              key={character.id}
              name={character.name}
              image={character.image}
              origin={character.origin}
              gender={character.gender}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default List;

import React from "react";

const Character = (character) => {
  return (
    <>
      <div className="col-sm col-lg-3 mb-4">
        <div className="card h-100">
          <img src={character.image} />
          <div className="card-body">
            <h2>{character.name}</h2>
            <p>{character.gender}</p>
            <p>{`origin: ${character.origin && character.origin.name}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;

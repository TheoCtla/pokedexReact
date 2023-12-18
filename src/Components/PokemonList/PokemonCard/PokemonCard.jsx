import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ name, id, image, types }) => {
  return (
    <div className='pokemon-card'>
      <span className='id'>{id}</span>
      <div className='pokemon-info'>
        <span>{name}</span>
        <img className='pokemon-card-image' src={image} alt={name} />
        <div className='type'>
          {types.map((type) => (
            <span key={id + type} className={`pokemon-type ${type}`}>{type}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

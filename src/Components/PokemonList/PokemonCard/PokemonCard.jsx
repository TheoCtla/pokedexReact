import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({name, id, image, types}) => {
   return (
      <div className='pokemon-card'>
        {name}
        {/* {id} */}
        <img className="pokemon-card-image" src={image} alt={name}/>
        {types.map((type) => (
           <div className={`pokemon-type ${type}`}>{type}</div>
        ))}
      </div>
   );
};
export default PokemonCard;

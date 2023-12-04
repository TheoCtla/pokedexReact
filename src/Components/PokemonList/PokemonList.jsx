import "./PokemonList.css";
import PokemonCard from "./PokemonCard/PokemonCard";
import { useState, useEffect } from "react";

const PokemonList = () => {
   const [row, setRows] = useState([]);

   useEffect(() => {
      fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
         .then((data) => data.json())
         .then((json) => setRows(json || []));
   }, []);
   console.log(row);

const addZeroToId = (id) => {
   if (id < 10) {
      return `No.00${id}`;
   } else if (id < 100) {
      return `No.0${id}`;
   } else {
      return id;
   }
}; 

   return (
      <header className='pokemonlist'>
         {row.map((pokemon) => (
            <PokemonCard 
            id={addZeroToId(pokemon.id)}
            name={pokemon.names.fr} 
            image={pokemon.image}
            types={pokemon.types}
            />
         ))}
      </header>
   );
};

export default PokemonList;
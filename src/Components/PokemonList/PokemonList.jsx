import React from "react";
import "./PokemonList.css";
import PokemonCard from "./PokemonCard/PokemonCard";

const PokemonList = () => {
   const [row, setRows] = React.useState([]);

   React.useEffect(() => {
      fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
         .then((data) => data.json())
         .then((json) => setRows(json || []));
   }, []);
   console.log(row);

   return (
      <header className='pokemonlist'>
         {row.map((pokemon) => (
            <PokemonCard 
            // id={pokemon.id}
            name={pokemon.names.fr} 
            image={pokemon.image}
            types={pokemon.types}
            />
         ))}
      </header>
   );
};

export default PokemonList;
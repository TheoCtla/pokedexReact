import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
import SearchBar from "./SearchBar/SearchBar"; // Assurez-vous que le chemin est correct
import "./PokemonList.css";

const FetchPokemonList = () => {
   const [pokemons, setPokemons] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const { language, changeLanguage } = useContext(languageContext)

   useEffect(() => {
      fetch("https://pokedex-jgabriele.vercel.app/pokemons.json")
         .then((response) => response.json())
         .then((data) => setPokemons(data || []));
   }, []);

   const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.names.fr.toLowerCase().includes(searchTerm.toLowerCase())
   );

   const addZeroToId = (id) => {
      return `No.${String(id).padStart(3, "0")}`;
   };

   return (
      <div>
         {}

         <SearchBar onSearch={setSearchTerm} />
         <header className='pokemonlist'>
            {filteredPokemons.map((pokemon) => (
               <PokemonCard
                  key={pokemon.id}
                  id={addZeroToId(pokemon.id)}
                  name={pokemon.names[language]}
                  image={pokemon.image}
                  types={pokemon.types}
               />
            ))}
         </header>
      </div>
   );
};

export default FetchPokemonList;

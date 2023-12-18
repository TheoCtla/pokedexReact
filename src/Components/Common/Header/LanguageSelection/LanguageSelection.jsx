import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageSelection = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetch('https://pokedex-jgabriele.vercel.app/pokemons.json')
      .then(response => response.json())
      .then(data => {
        const extractedLanguages = extractLanguages(data);
        setLanguages(extractedLanguages);
      });
  }, []);

  const extractLanguages = (data) => {
    const languages = [];
    data.forEach(pokemon => {
      if (!languages.includes(pokemon.names.fr)) {
        languages.push(pokemon.names.fr);
      }
    });
    return languages;
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        {languages.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelection;

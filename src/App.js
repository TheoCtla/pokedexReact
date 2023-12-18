import Header from './Components/Common/Header/Header'
import PokemonList from './Components/PokemonList/PokemonList'
import { LanguageProvider } from './Components/Common/Header/LanguageSelection/LanguageContext'
import LanguageFilter from './Components/Common/Header/LanguageSelection/LanguageSelection'


function App() {
  return (
    <LanguageProvider>
      <div className='App'>
        <LanguageFilter />
        <Header />
        <PokemonList />
      </div>
    </LanguageProvider>
  )
}

export default App

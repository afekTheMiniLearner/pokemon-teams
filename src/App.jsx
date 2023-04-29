import React from "react";

import { PokemonCardsBox } from "@components";
import teams from "@utils/pokemons.json";

function App() {
  return (
    <div className="app-container">
      <PokemonCardsBox pokemonsTeam={teams["Fire red"]} />
    </div>
  );
}

export default App;

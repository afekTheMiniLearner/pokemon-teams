import React from "react";

import { PokemonCardsBox } from "@components";
import { Title } from "@base-components";
import teams from "@utils/pokemons.json";

function App() {
  return (
    <div className="app-container">
      <Title text="My favorite pokemon's team" />
      <PokemonCardsBox pokemonsTeam={teams["Fire red"]} />
    </div>
  );
}

export default App;

import React from "react";

import { Chip } from "@base-components";
import { PokemonCard } from "@components";

function App() {
  return (
    <div className="app-container">
      <PokemonCard
        imageUrl="/pokemons/charizard.jpg"
        pokemonName="Charizard"
        information="The most impressive pokemon to ever exist in my opinion"
      />
      <Chip label="attack" />
    </div>
  );
}

export default App;

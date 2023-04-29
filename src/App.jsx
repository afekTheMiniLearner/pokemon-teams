import React from "react";

import { PokemonCard } from "@components";

function App() {
  return (
    <div className="app-container">
      <PokemonCard
        imageUrl="/pokemons/charizard.jpg"
        pokemonName="Charizard"
        information="The most impressive pokemon to ever exist in my opinion"
        attributes={{ attack: 20 }}
      />
    </div>
  );
}

export default App;

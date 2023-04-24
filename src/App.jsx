import React from "react";

import { PokemonCard } from "@components";

function App() {
  return (
    <div className="app-container">
      <PokemonCard
        imageUrl="/pokemons/charizard.jpg"
        pokemonName="Charizard"
        information="The strongest pokemon to ever exist IMO"
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";

import { PokemonCardsBox, ToggleDataButtons } from "@components";
import { Title } from "@base-components";
import { GAMES_LIST } from "@utils";
import pokemonTeams from "../pokemons.json";

function App() {
  const [team, setTeam] = useState("Fire red");

  return (
    <div className="app-container">
      <ToggleDataButtons
        currentValue={team}
        setValue={setTeam}
        values={GAMES_LIST}
      />
      <Title text="My favorite pokemon's team" />
      <PokemonCardsBox pokemonsTeam={pokemonTeams[team]} />
    </div>
  );
}

export default App;

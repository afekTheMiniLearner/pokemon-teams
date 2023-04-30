import React, { useState } from "react";

import { PokemonCardsBox, ToggleDataButtons } from "@components";
import { Title } from "@base-components";
import { GAMES_LIST } from "@utils";
import teams from "../pokemons.json";

function App() {
  const [team, setTeam] = useState("Fire red");
// grid
  return (
    <div className="app-container">
      <ToggleDataButtons
        currentValue={team}
        setValue={setTeam}
        values={GAMES_LIST}
      />
      <Title text="My favorite pokemon's team" />
      <PokemonCardsBox pokemonsTeam={teams[team]} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Grow from "@mui/material/Grow";

import { PokemonCardsBox, ToggleDataButtons } from "@components";
import { Title } from "@base-components";
import { GAMES_LIST } from "@utils";
import pokemonTeams from "../pokemons.json";

function App() {
  const [team, setTeam] = useState(Object.keys(pokemonTeams)?.[0]);
  const [shouldLoad, setShouldLoad] = useState(true);

  useEffect(() => {
    if (!shouldLoad) setShouldLoad(true);
  }, [shouldLoad]);

  return (
    <div className="app-container">
      <ToggleDataButtons
        currentValue={team}
        setValue={(t) => {
          setTeam(t);
          setShouldLoad(false);
        }}
        values={GAMES_LIST}
      />
      <Title text="My favorite pokemon's team" />
      {shouldLoad ? (
        <div>
          <PokemonCardsBox pokemonsTeam={pokemonTeams[team]} />
        </div>
      ) : null}
    </div>
  );
}

export default App;

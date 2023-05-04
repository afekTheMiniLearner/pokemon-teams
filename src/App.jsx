import React, { useEffect, useState } from "react";

import { PokemonCardsBox, ToggleDataButtons } from "@components";
import { Title, LabeledLoader } from "@base-components";
import { GAMES_BUTTONS } from "@utils";
import pokemonTeams from "../pokemons.json";

function App() {
  const [team, setTeam] = useState(Object.keys(pokemonTeams)?.[0]);
  const [shouldLoad, setShouldLoad] = useState(true);

  useEffect(() => {
    if (!shouldLoad) setShouldLoad(true);
  }, [shouldLoad]);

  return (
    <div className="app-container">
      <Title text="My favorite pokemon's team" />
      <ToggleDataButtons
        currentValue={team}
        onChange={(t) => {
          setTeam(t);
          setShouldLoad(false);
        }}
        buttonsProperties={GAMES_BUTTONS}
      />
      {!team ? (
        <LabeledLoader label="Waiting for you to pick a game . . ." />
      ) : null}
      {shouldLoad ? (
        <div>
          <PokemonCardsBox pokemonsTeam={pokemonTeams[team]} />
        </div>
      ) : null}
    </div>
  );
}

export default App;

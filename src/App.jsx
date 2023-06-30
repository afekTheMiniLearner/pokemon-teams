import React, { useEffect, useState } from "react";

import { PokemonCardsBox } from "@components";
import { Title, Select } from "@base-components";
import { GAMES_BUTTONS } from "@utils";
import { AppContainer } from "./App.styled";
import pokemonTeams from "../pokemons.json";

function App() {
  const [team, setTeam] = useState(Object.keys(pokemonTeams)?.[0]);
  const [shouldLoad, setShouldLoad] = useState(true);

  useEffect(() => {
    if (!shouldLoad) setShouldLoad(true);
  }, [shouldLoad]);

  return (
    <AppContainer>
      <Title text="Supreme Pokemon teams" />
      <Select
        currentValue={team}
        onChange={(t) => {
          setTeam(t);
          setShouldLoad(false);
        }}
        buttonsProperties={GAMES_BUTTONS}
      />
      {shouldLoad ? (
        <div>
          <PokemonCardsBox pokemonsTeam={pokemonTeams[team]} />
        </div>
      ) : null}
    </AppContainer>
  );
}

export default App;

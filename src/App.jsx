import React, { useEffect, useState } from "react";

import { PokemonCardsBox } from "@components";
import { Title, Select } from "@base-components";
import { GAMES_OPTIONS } from "@utils";
import { AppContainer } from "./App.styled";
import pokemonTeams from "../pokemons.json";

function App() {
  const [team, setTeam] = useState(Object.keys(pokemonTeams)?.[2]);
  const [shouldLoad, setShouldLoad] = useState(true);

  useEffect(() => {
    if (!shouldLoad) setShouldLoad(true);
  }, [shouldLoad]);

  return (
    <AppContainer>
      <Title text="Pokemon dream teams" />
      <Select
        color="error"
        currentValue={team}
        onChange={(t) => {
          setTeam(t);
          setShouldLoad(false);
        }}
        optionsProperties={GAMES_OPTIONS}
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

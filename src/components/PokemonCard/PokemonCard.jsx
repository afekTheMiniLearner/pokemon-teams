import React, { useState } from "react";
import PropTypes from "prop-types";

import { Card } from "@base-components";
import PokemonChips from "@components/PokemonChips/PokemonChips";
import PokemonTypes from "@components/PokemonTypes/PokemonTypes";
import { convertAttributesToLabels } from "@utils";

export default function PokemonCard({
  attributes,
  imageUrl,
  information,
  pokemonName,
  types,
  ...props
}) {
  const [dataType, setDataType] = useState("Basic");

  return dataType === "Basic" ? (
    <Card
      imageUrl={imageUrl}
      information={information}
      onClick={() => setDataType("Advanced")}
      title={pokemonName}
      {...props}
    />
  ) : (
    <Card
      imageUrl={imageUrl}
      onClick={() => setDataType("Basic")}
      title={pokemonName}
      {...props}
    >
      <PokemonTypes types={types} />
      <PokemonChips chipsContent={convertAttributesToLabels(attributes)} />
    </Card>
  );
}

PokemonCard.propTypes = {
  attributes: PropTypes.shape({
    Atk: PropTypes.number,
    Def: PropTypes.number,
    SpAtk: PropTypes.number,
    SpDef: PropTypes.number,
    Health: PropTypes.number,
  }),
  imageUrl: PropTypes.string,
  information: PropTypes.string,
  pokemonName: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
};

PokemonCard.defaultProps = {
  attributes: {},
  imageUrl: undefined,
  information: undefined,
  pokemonName: "Pokemon",
  types: [],
};

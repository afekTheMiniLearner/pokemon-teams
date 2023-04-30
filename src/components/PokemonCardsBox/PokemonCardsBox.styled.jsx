import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import PokemonCard from "../PokemonCard/PokemonCard";

export const MuiBox = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-height: 590px;
  min-width: 1400px;
  margin-top: 150px;
  gap: 20px;
`;

export const MuiPokemonCard = styled(PokemonCard)``;

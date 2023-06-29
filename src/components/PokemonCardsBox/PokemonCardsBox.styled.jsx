import { styled } from "@mui/material/styles";

import MuiBox from "@mui/material/Box";

import MyPokemonCard from "../PokemonCard/PokemonCard";

export const Box = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  marginTop: "150px",
  gap: "20px",

  [theme.breakpoints.down("xs")]: {
    position: "absolute",
    top: "110px",
    right: "-5px",
  },
}));

export const PokemonCard = styled(MyPokemonCard)``;

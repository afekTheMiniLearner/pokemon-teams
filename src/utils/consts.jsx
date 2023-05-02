import React from "react";
import { GiMountainCave as GroundIcon } from "react-icons/gi";
import {
  Eject as SteelIcon,
  LocalFireDepartment as FireIcon,
  WaterDrop as WaterIcon,
  Stars as StarIcon,
  FlashOn as ElectricIcon,
  SportsMma as FightIcon,
  Diamond as DiamondIcon,
  Hub as PoisonIcon,
  Grass as GrassIcon,
  Visibility as VisibilityIcon,
  Air as AirIcon,
  PestControl as BugIcon,
} from "@mui/icons-material";

export const TOGGLE_DATA_OPTIONS = ["Main", "Advanced"];

export const GAMES_LIST = [
  {
    name: "Fire red",
    style: { color: "red !important" },
    icon: <FireIcon />,
  },
  {
    name: "Emerald",
    style: { color: "rgb(38, 154, 25) !important" },
    icon: <DiamondIcon />,
  },
];

export const ATTRIBUTES_LIST = [
  "attack",
  "defense",
  "spAttack",
  "spDefense",
  "health",
];

export const TYPES_ICONS = {
  normal: <StarIcon />,
  fire: <FireIcon />,
  poison: <PoisonIcon />,
  grass: <GrassIcon />,
  water: <WaterIcon />,
  flying: <AirIcon />,
  fighting: <FightIcon />,
  psychic: <VisibilityIcon />,
  bug: <BugIcon />,
  electric: <ElectricIcon />,
  steel: <SteelIcon />,
  ground: <GroundIcon />,
};

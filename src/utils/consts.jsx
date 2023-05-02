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
  Visibility as PsychicIcon,
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
  normal: { icon: <StarIcon />, bgColor: "grey" },
  fire: { icon: <FireIcon />, bgColor: "red" },
  poison: { icon: <PoisonIcon />, bgColor: "purple" },
  grass: { icon: <GrassIcon />, bgColor: "green" },
  water: { icon: <WaterIcon />, bgColor: "blue" },
  flying: { icon: <AirIcon />, bgColor: "lightblue" },
  fighting: { icon: <FightIcon />, bgColor: "orange" },
  psychic: { icon: <PsychicIcon />, bgColor: "pink" },
  bug: { icon: <BugIcon />, bgColor: "olive" },
  electric: { icon: <ElectricIcon />, bgColor: "yellow" },
  steel: { icon: <SteelIcon />, bgColor: "silver" },
  ground: { icon: <GroundIcon />, bgColor: "brown" },
};

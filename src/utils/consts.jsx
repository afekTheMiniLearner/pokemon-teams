import React from "react";
import { GiMountainCave as GroundIcon } from "react-icons/gi";
import {
  Eject as SteelIcon,
  LocalFireDepartment as FireIcon,
  WaterDrop as WaterIcon,
  Stars as StarIcon,
  FlashOn as ElectricIcon,
  SportsMma as FightIcon,
  Hub as PoisonIcon,
  Grass as GrassIcon,
  Visibility as PsychicIcon,
  Air as AirIcon,
  PestControl as BugIcon,
} from "@mui/icons-material";

export const TOGGLE_DATA_OPTIONS = ["Main", "Advanced"];

export const GAMES_OPTIONS = {
  "Fire red": { style: { color: "red !important" } },
  Emerald: { style: { color: "rgb(38, 154, 25) !important" } },
};

export const ATTRIBUTES_LIST = ["Atk", "Def", "SpAtk", "SpDef", "Health"];

export const TYPES_ICONS = {
  normal: { icon: <StarIcon />, style: { backgroundColor: "grey" } },
  fire: { icon: <FireIcon />, style: { backgroundColor: "red" } },
  poison: { icon: <PoisonIcon />, style: { backgroundColor: "purple" } },
  grass: { icon: <GrassIcon />, style: { backgroundColor: "green" } },
  water: { icon: <WaterIcon />, style: { backgroundColor: "blue" } },
  flying: { icon: <AirIcon />, style: { backgroundColor: "lightblue" } },
  fighting: { icon: <FightIcon />, style: { backgroundColor: "orange" } },
  psychic: { icon: <PsychicIcon />, style: { backgroundColor: "pink" } },
  bug: { icon: <BugIcon />, style: { backgroundColor: "olive" } },
  electric: { icon: <ElectricIcon />, style: { backgroundColor: "yellow" } },
  steel: { icon: <SteelIcon />, style: { backgroundColor: "silver" } },
  ground: { icon: <GroundIcon />, style: { backgroundColor: "brown" } },
};

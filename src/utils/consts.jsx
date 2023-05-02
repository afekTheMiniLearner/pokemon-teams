import React from "react";
import { BsFire } from "react-icons/bs";
import { TbDiamondFilled } from "react-icons/tb";
import { GrFireball } from "react-icons/gr";

export const TOGGLE_DATA_OPTIONS = ["Main", "Advanced"];

/* Each game on the list can have the following properties:
- name: string that represents the name of the game.
- style: object of additional style for the game.
- icon: node of the desired icon to be displayed for the game. */
export const GAMES_LIST = [
  {
    name: "Fire red",
    style: { color: "red !important" },
    icon: <BsFire />,
  },
  {
    name: "Emerald",
    style: { color: "rgb(38, 154, 25) !important" },
    icon: <TbDiamondFilled />,
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
  normal: <GrFireball />,
  fire: <BsFire />,
  // poison:    ,
  // grass:     ,
  // water:     ,
  // flying:    ,
  // fighting:  ,
  // psychic:   ,
  // ground:    ,
  // bug:       ,
};

import React from "react";
import { BsFire } from "react-icons/bs";
import { TbDiamondFilled } from "react-icons/tb";

// eslint-disable-next-line import/prefer-default-export
export const TOGGLE_DATA_OPTIONS = ["Main", "Advanced"];

/* Each game on the list is able to configure:
- name: string that represents the name of the game.
- style: object of additional style for the game.
- icon: node of the desired icon to be displayed for the game. */
export const GAMES_LIST = [
  {
    name: "Fire red",
    style: { color: "red" },
    icon: <BsFire />,
  },
  {
    name: "Emerald",
    style: { color: "rgb(38, 154, 25)" },
    icon: <TbDiamondFilled />,
  },
];

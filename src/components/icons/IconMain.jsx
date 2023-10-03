import React from "react";

import IconClub from "./IconClub";
import IconDiamond from "./IconDiamond";
import IconHeart from "./IconHeart";
import IconSpade from "./IconSpade";

function IconMain({ suite }) {
  suite = suite.toUpperCase();

  return suite === "CLUB" ? (
    <IconClub />
  ) : suite === "DIAMOND" ? (
    <IconDiamond />
  ) : suite === "HEART" ? (
    <IconHeart />
  ) : suite === "SPADE" ? (
    <IconSpade />
  ) : undefined;
}

export default IconMain;

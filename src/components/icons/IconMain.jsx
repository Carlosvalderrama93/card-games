import React from "react";

import IconClub from "./IconClub";
import IconDiamont from "./IconDiamont";
import IconHeart from "./IconHeart";
import IconSpade from "./IconSpade";

function IconMain({ suite }) {
  suite = suite.toUpperCase();

  return suite === "CLUB" ? (
    <IconClub />
  ) : suite === "DIAMONT" ? (
    <IconDiamont />
  ) : suite === "HEART" ? (
    <IconHeart />
  ) : suite === "SPADE" ? (
    <IconSpade />
  ) : undefined;
}

export default IconMain;

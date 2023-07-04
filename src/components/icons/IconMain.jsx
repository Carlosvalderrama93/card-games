import React from "react";

import IconClub from "./IconClub";
import IconDiamont from "./IconDiamont";
import IconHeart from "./IconHeart";
import IconSpade from "./IconSpade";

function IconMain({ suite }) {
  return suite === "club" ? (
    <IconClub />
  ) : suite === "diamont" ? (
    <IconDiamont />
  ) : suite === "heart" ? (
    <IconHeart />
  ) : suite === "spade" ? (
    <IconSpade />
  ) : null;
}

export default IconMain;

import React from "react";

import IconClub from "./IconClub";
import IconDiamont from "./IconDiamont";
import IconHeart from "./IconHeart";
import IconSpade from "./IconSpade";
import propsValidator from "../../Others/propsValidator";

function IconMain({ suite, children }) {
  const isValid = propsValidator({ suite }, 1);
  if (children || !isValid) return null;
  suite = suite.toUpperCase();

  return suite === "CLUB" ? (
    <IconClub />
  ) : suite === "DIAMONT" ? (
    <IconDiamont />
  ) : suite === "HEART" ? (
    <IconHeart />
  ) : suite === "SPADE" ? (
    <IconSpade />
  ) : null;
}

export default IconMain;

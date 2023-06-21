import React from "react";

import IconClub from "./IconClub";
import IconDiamont from "./IconDiamont";
import IconHeart from "./IconHeart";
import IconSpade from "./IconSpade";

function IconMain({ type }) {
  let icon;

  if (type === "club") {
    icon = <IconClub />;
  } else if (type === "diamont") {
    icon = <IconDiamont />;
  } else if (type === "heart") {
    icon = <IconHeart />;
  } else if (type === "spade") {
    icon = <IconSpade />;
  } else {
    icon = "";
  }

  return <>{icon}</>;
}

export default IconMain;

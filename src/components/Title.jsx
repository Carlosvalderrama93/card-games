import React from "react";
import propsValidator from "../Others/propsValidator";

function Title({ children }) {
  let isValid = propsValidator({ rank: children }, 1);
  if (children?.length !== 1 || !isValid) return null;
  return <span className="title">{children}</span>;
}

export default Title;

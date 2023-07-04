import React from "react";
import propsValidator from "../../Others/propsValidator";

function CardCorner({ children }) {
  if (!children) return null;
  const toBeValidate = {
    title: children[0].props.children,
    ...children[1].props,
  };
  const areValid = propsValidator(toBeValidate, 2);
  if (!areValid) return null;

  return <div className="card-front-title">{children}</div>;
}

export default CardCorner;

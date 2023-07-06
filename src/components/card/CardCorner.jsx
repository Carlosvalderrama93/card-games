import React from "react";
import propsValidator from "../../Others/propsValidator";

function CardCorner({ children }) {
  if (!children) return null;
  const toValidate = {
    rank: children[0].props.children,
    ...children[1].props,
  };
  const isValid = propsValidator(toValidate, 2);
  if (!isValid) return null;

  return <div className="card-front-title">{children}</div>;
}

export default CardCorner;

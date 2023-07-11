import React from "react";
import PropTypes from "prop-types";

import CardTop from "./CardTop";
import validProps from "../../Others/validProps";
import propsValidator from "../../Others/propsValidator";

function Card(props) {
  const isValid = propsValidator(props, 3);
  if (isValid) {
    return (
      <div className="card">
        <CardTop rank={props.rank} suite={props.suite} color={props.color} />
      </div>
    );
  }
  return null;
}

Card.propTypes = {
  rank: PropTypes.oneOf(validProps.rank),
  suite: PropTypes.oneOf(validProps.suite),
  color: PropTypes.oneOf(validProps.color),
};

export default Card;

import { string } from "prop-types";
import validProps from "./validProps";

export default function propsValidator(props, propsLength = 0) {
  const propType = Object.prototype.toString.call(props);
  const isObject = propType === "[object Object]";
  if (!isObject) return false;
  const entries = Object.entries(props);
  if (propsLength !== entries.length || propsLength <= 0) return false;

  const isInvalid = ([key, value]) => {
    const isString = typeof value === "string";
    if (!isString) return true;
    const valueToFind = value.toUpperCase();
    if (!(key in validProps)) return true;
    const isValid = validProps[key].includes(valueToFind);
    if (!isValid) return true;
  };

  const noValidated = entries.some(isInvalid);

  return noValidated ? false : true;
}

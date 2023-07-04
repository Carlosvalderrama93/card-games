import { string } from "prop-types";
import validProps from "./validProps";

export default function propsValidator(props, propsLength = 0) {
  const propsType = Object.prototype.toString.call(props);
  const isObject = propsType === "[object Object]";
  if (!isObject) return false;
  const entries = Object.entries(props);
  if (propsLength !== entries.length || propsLength <= 0) return false;
  const result = entries.some(([key, value]) => {
    const isString = typeof value === "string";
    if (!isString) return false;
    const isValid = validProps[key]?.includes(value.toUpperCase());
    return isValid;
  });

  return result;
}
/*
const result = entries.reduce((isValid, entry) => {
  const [key, value] = entry;
  
  //if (!isValid || !value) return false;
  const isString = typeof value === "string";
  if (!isString) return false;
  isValid = validProps[key]?.includes(value.toUpperCase());
  return isValid;
}, false);
*/

/*
  entries.forEach(([key, value]) => {
    const valueUppercase = value ? value.toUpperCase() : undefined;
    if (valueUppercase === false) return false;
    const booleanValue = validProps[key]?.includes(valueUppercase);
    //result = { ...result, [key]: booleanValue };
    //result[key] = booleanValue;
    console.log("booleanValue", booleanValue);
    if (!booleanValue) return false;
  });
*/

/*
  let result = true;
  let index = 0;
  
while (result === true) {
  const [key, value] = entries[index];
  //
  const valueUppercase = value ? value.toUpperCase() : undefined;
  if (valueUppercase === undefined) result = false;
  const booleanValue = validProps[key]?.includes(valueUppercase);
  if (!booleanValue) result = false;    
  index++;
  }
*/

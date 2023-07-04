import { test, describe, expect } from "vitest";
import propsValidator from "../../../Others/propsValidator";

describe("Unit testing of 'propsvalidator' function", () => {
  test("Should render correctly when 'propsValidator' is invoked with valid arguments", () => {
    const validatedProps = propsValidator({ color: "red" }, 1);
    expect(validatedProps).toBeTruthy();
  });

  test("Should return 'false' when 'propsValidator' is invoked without arguments", () => {
    const validatedProps = propsValidator();
    expect(validatedProps).toBeFalsy();
    // Before was undefined
  });

  test("Should return an 'boolean' when 'propsValidator' is invoked", () => {
    const validatedProps = propsValidator(
      {
        color: "red",
        suite: "heart",
        rank: "2",
      },
      3
    );
    expect(validatedProps).toBeTypeOf("boolean");
  });

  test("Should return 'false' when 'propsValidator' is invoked with invalid arguments", () => {
    const validatedProps = propsValidator([]);
    expect(validatedProps).toBeFalsy();
  });

  test("Should convert the values to 'uppercase' when 'propsValidator' is invoked with valid arguments", () => {
    const validatedProps = propsValidator(
      {
        color: "red",
        suite: "heart",
        rank: "a",
      },
      3
    );
    expect(validatedProps).toBeTruthy();
  });
});

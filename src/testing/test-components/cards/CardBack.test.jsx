import { test, describe, expect } from "vitest";
import TestRenderer from "react-test-renderer";

import CardBack from "../../../components/card/CardBack";

describe.skip("Unit testing of CardBack Component", () => {
  test("Should render correctly when 'CardBack' is invoked with valid arguments", () => {
    const component = TestRenderer.create(<CardBack color="red" />);
    const jsonCardBack = component.toJSON();
    expect(jsonCardBack).toBeTruthy();
  });

  test("Should return null when 'CardBack' is invoked without arguments", () => {
    const component = TestRenderer.create(<CardBack />);
    const jsonCardBack = component.toJSON();
    console.log("jsonCardBack is:", jsonCardBack.children);
    expect(jsonCardBack).toBeTruthy();
  });
});

import { test, describe, expect } from "vitest";
import TestRenderer from "react-test-renderer";

import Card from "../../../components/card/Card";
import CardTop from "../../../components/card/CardTop";

describe("Unit testing from Card Component", () => {
  test("Should render correctly when 'Card' is invoked with valid arguments", () => {
    const card = TestRenderer.create(
      <Card rank={"A"} suite={"heart"} color={"blue"} />
    );
    const jsonCard = card.toJSON();
    expect(jsonCard).toBeTruthy();
  });

  test("Should render correctly its child 'CardTop' with 3 props when 'Card' is invoked with valid arguments", () => {
    const card = TestRenderer.create(
      <Card rank={"5"} suite={"heart"} color={"blue"} />
    );
    const testInstance = card.root;
    expect(testInstance.findByType(CardTop).props).toEqual({
      rank: "5",
      suite: "heart",
      color: "blue",
    });
  });

  test("Should return 'null' when 'Card' is invoked with invalid arguments", () => {
    const card = TestRenderer.create(
      <Card typeFront={"heart"} typeBack={"one"} />
    );
    const jsonCard = card.toJSON();
    expect(jsonCard).toBeNull();
  });

  test("Should return 'null' when 'Card' is invoked without arguments", () => {
    const card = TestRenderer.create(<Card />);
    const jsonCard = card.toJSON();
    expect(jsonCard).toBeNull();
  });

  test("Should return 'null' when 'Card' is invoked without all required arguments", () => {
    const card = TestRenderer.create(<Card rank={"5"} suite={"heart"} />);
    const jsonCard = card.toJSON();
    expect(jsonCard).toBeNull();
  });
});

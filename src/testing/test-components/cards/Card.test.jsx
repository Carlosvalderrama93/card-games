import { test, describe, expect } from "vitest";
import TestRenderer from "react-test-renderer";

import Card from "../../../components/card/Card";
import CardTop from "../../../components/card/CardTop";

describe.skip("Unit testing from 'Card' Component", () => {
  test("Should render correctly when 'Card' is invoked with valid arguments", () => {
    const card = TestRenderer.create(
      <Card rank={"9"} suite={"HEART"} color={"BLUE"} />
    );
    const jsonCard = card.toJSON();
    expect(jsonCard).toBeTruthy();
  });

  test("Should render correctly its child 'CardTop' with 3 props when 'Card' is invoked with valid arguments", () => {
    const card = TestRenderer.create(
      <Card rank={"9"} suite={"heart"} color={"blue"} />
    );
    const testInstance = card.root;
    expect(testInstance.findByType(CardTop).props).toEqual({
      rank: "9",
      suite: "heart",
      color: "blue",
    });
  });
});

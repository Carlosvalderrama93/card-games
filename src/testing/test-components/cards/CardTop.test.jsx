import { test, describe, expect } from "vitest";
import TestRenderer from "react-test-renderer";

import CardTop from "../../../components/card/CardTop";
import CardFront from "../../../components/card/CardFront";
import CardBack from "../../../components/card/CardBack";

describe("Unit testing of CardTop Component", () => {
  test("Should render correctly when 'CardTop' is invoked with valid arguments", () => {
    const cardTop = TestRenderer.create(
      <CardTop rank={"4"} suite={"heart"} color={"BLUE"} />
    );
    const jsonCardTop = cardTop.toJSON();
    expect(jsonCardTop).toBeTruthy();
  });

  test("Should render correctly 'CardFront' with 2 props when 'CardTop' is invoked with valid arguments", () => {
    const cardTop = TestRenderer.create(
      <CardTop rank={"4"} suite={"HEART"} color={"BLUE"} />
    );
    const testInstance = cardTop.root;
    expect(testInstance.findByType(CardFront).props).toEqual({
      rank: "4",
      suite: "HEART",
    });
  });

  test("Should render correctly 'CardBack' with 1 prop when 'CardTop' is invoked with valid arguments", () => {
    const cardTop = TestRenderer.create(
      <CardTop rank={"4"} suite={"HEART"} color={"BLUE"} />
    );
    const testInstance = cardTop.root;
    expect(testInstance.findByType(CardBack).props).toEqual({
      color: "BLUE",
    });
  });

  test("Should return 'null' when 'CardTop' is invoked with invalid arguments", () => {
    const cardTop = TestRenderer.create(<CardTop title={14} type="#adr%" />);
    const jsonCardTop = cardTop.toJSON();
    expect(jsonCardTop).toBeNull();
  });

  test("Should return 'null' when 'CardTop' is invoked without arguments", () => {
    const cardTop = TestRenderer.create(<CardTop />);
    const jsonCardTop = cardTop.toJSON();
    expect(jsonCardTop).toBeNull();
  });

  test("Should return 'null' when 'CardTop' is invoked without all required arguments", () => {
    const cardTop = TestRenderer.create(<CardTop rank={"4"} suite={"HEART"} />);
    const jsonCardTop = cardTop.toJSON();
    expect(jsonCardTop).toBeNull();
  });
});

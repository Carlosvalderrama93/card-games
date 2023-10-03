import { test, describe, expect } from "vitest";
import TestRenderer from "react-test-renderer";

import CardFront from "../../../components/card/CardFront";

describe.skip("Unit testing of CardFront Component", () => {
  test("Should render correctly when 'CardFront' is invoked with valid arguments", () => {
    const cardFront = TestRenderer.create(
      <CardFront rank={"3"} suite="CLUB" />
    );
    const jsonCardFront = cardFront.toJSON();
    expect(jsonCardFront).toBeTruthy();
  });

  test("Should render 'CardCorner' child in the firts position when 'CardFront' is invoked with valid arguments", () => {
    const cardFront = TestRenderer.create(
      <CardFront rank={"3"} suite={"CLUB"} />
    );

    const jsonCardFront = cardFront.toJSON();
    expect(jsonCardFront.children[0].props).toEqual({
      className: "card-front-title",
    });
  });

  test("Should render 'CardCorner' child in the third position when 'CardFront' is invoked with valid arguments", () => {
    const cardFront = TestRenderer.create(
      <CardFront rank={"3"} suite={"CLUB"} />
    );

    const jsonCardFront = cardFront.toJSON();
    expect(jsonCardFront.children[2].props).toEqual({
      className: "card-front-title",
    });
  });

  test("Should render 'FigureMain' in the second position when 'CardFront' is invoked with valid arguments", () => {
    const cardFront = TestRenderer.create(
      <CardFront rank={"3"} suite={"CLUB"} />
    );

    const jsonCardFront = cardFront.toJSON();
    expect(jsonCardFront.children[1].props).toEqual({
      className: "card-front-img",
    });
  });
});

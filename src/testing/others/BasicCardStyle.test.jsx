import { test, describe, expect } from "vitest";
import TestRenderer from "react-test-renderer";
import { createSerializer } from "@emotion/jest";

import Card from "../../components/card/Card";
import Title from "../../components/Title";
import CardTop from "../../components/card/CardTop";
import CardBack from "../../components/card/CardBack";
import IconMain from "../../components/icons/IconMain";
import CardFront from "../../components/card/CardFront";
import CardCorner from "../../components/card/CardCorner";

expect.addSnapshotSerializer(createSerializer());

describe("Unit testing of Card Components styles", () => {
  test("Should render with ClassName 'card' when Card component is invoked with valid arguments", () => {
    const card = TestRenderer.create(
      <Card suite={"HEART"} rank={"A"} color={"BLUE"} />
    );
    const jsonCard = card.toJSON();
    expect(jsonCard.props).toMatchInlineSnapshot(`
      {
        "className": "card",
      }
    `);
  });

  test("Should render with ClassName 'card-top' when Card component is invoked with valid arguments", () => {
    const cardTop = TestRenderer.create(
      <CardTop suite={"HEART"} rank={"A"} color={"BLUE"} />
    );
    const jsonCardTop = cardTop.toJSON();
    expect(jsonCardTop.props).toMatchInlineSnapshot(`
      {
        "className": "card-top",
      }
    `);
  });

  test("Should render with ClassName 'card-front' when Card component is invoked with valid arguments", () => {
    const cardFront = TestRenderer.create(
      <CardFront suite={"HEART"} rank={"A"} />
    );
    const jsonCardFront = cardFront.toJSON();
    expect(jsonCardFront.props).toMatchInlineSnapshot(`
      {
        "className": "card-front",
      }
    `);
  });

  test("Should render with ClassName 'card-front-title' when Card component is invoked with valid arguments", () => {
    const cardCorner = TestRenderer.create(
      <CardCorner>
        <Title>10</Title>
        <IconMain suite={"HEART"} />
      </CardCorner>
    );
    const jsonCardCorner = cardCorner.toJSON();
    expect(jsonCardCorner.props).toMatchInlineSnapshot(`
      {
        "className": "card-front-title",
      }
    `);
  });

  test("Should render with ClassName 'title' when Card component is invoked with valid arguments", () => {
    const title = TestRenderer.create(<Title>A</Title>);
    const jsonTitle = title.toJSON();
    expect(jsonTitle.props).toMatchInlineSnapshot(`
      {
        "className": "title",
      }
    `);
  });

  test("Should render with ClassName 'card-back' when Card component is invoked with valid arguments", () => {
    const cardBack = TestRenderer.create(<CardBack color={"BLUE"} />);
    const jsonCardBack = cardBack.toJSON();
    expect(jsonCardBack.props).toMatchInlineSnapshot(`
      {
        "className": "card-back",
      }
    `);
  });
});

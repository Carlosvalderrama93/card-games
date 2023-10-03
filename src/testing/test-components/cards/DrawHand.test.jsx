import { describe, expect, test } from "vitest";
import TestRenderer from "react-test-renderer";

import DrawHand from "../../../components/DrawHand";

const hand = [
  {
    id: "diamond_5",
    score: 11,
    suite: "DIAMOND",
    rank: "A",
    color: false,
  },
  {
    id: "diamond_8",
    score: 11,
    suite: "DIAMOND",
    rank: "A",
    color: false,
  },
];

describe.skip("Unit testing from 'DrawHand' Component", () => {
  test.skip("Should render correctly when 'DrawHand' is invoked with valid arguments", () => {
    const drawnCards = TestRenderer.create(<DrawHand hand={hand} />);
    const jsonDrawHand = drawnCards.toJSON();
    expect(jsonDrawHand).toBeTruthy();
  });

  test.skip("Should render correctly three children when 'DrawHand' is invoked with valid arguments", () => {
    const drawnCards = TestRenderer.create(<DrawHand hand={hand} />);
    const jsonDrawHand = drawnCards.toJSON();
    expect(jsonDrawHand).toHaveLength(2);
  });

  test("Should not render when 'DrawHand' is invoked with invalid arguments", () => {
    const drawnCards = TestRenderer.create(<DrawHand />);
    const jsonDrawHand = drawnCards.toJSON();

    expect(jsonDrawHand).toBeNull();
  });
  test("Should not render when 'DrawHand' is invoked with invalid arguments", () => {
    const drawnCards = TestRenderer.create(<DrawHand hand={"hola"} />);
    const jsonDrawHand = drawnCards.toJSON();

    expect(jsonDrawHand).toBeNull();
  });
  test("Should ?not render when 'DrawHand' is invoked with INCOMPLETE arguments", () => {});
});

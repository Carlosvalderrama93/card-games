import { describe, expect, test } from "vitest";
import { createHand } from "../../Others/cards";

describe.skip("Unit testing of 'createHand' function", () => {
  test("Should return a correct hand when'createHand' is invoked correctly", () => {
    const hand = createHand("user_1");
    const toMatch = { id: "user_1", cards: [], score: 0 };
    expect(hand).toMatchObject(toMatch);
  });
});

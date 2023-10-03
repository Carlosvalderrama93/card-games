import { describe, expect, test } from "vitest";
import { createDeck, shuffleDeck } from "../../Others/cards";

describe.skip("Unit testing of 'shuffleDeck' function", () => {
  test("Should have the length expected when 'shuffleDeck' is invoked correctly", () => {
    const deck = createDeck();
    const shuffled = shuffleDeck(deck);
    expect(shuffled).toHaveLength(56);
  });
});

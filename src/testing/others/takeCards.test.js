import { describe, expect, test } from "vitest";
import { createDeck, takeCards } from "../../Others/cards";

describe.skip("Unit testing of 'takeCard' function", () => {
  test("Should add the number of cards specified in the player's hand when 'takeCards' is invoked correctly", () => {
    const deck = createDeck();
    const player = {
      id: "user_1",
      hand: {
        id: "user_Hand",
        score: 0,
        cards: [],
      },
    };
    takeCards(player, deck, 2);
    expect(player.hand.cards).toHaveLength(2);
  });
  test("Should reduce the length of 'deck' when 'takeCards' is invoked correctly", () => {
    const deck = createDeck();
    const player = {
      id: "user_1",
      hand: {
        id: "user_Hand",
        score: 0,
        cards: [],
      },
    };
    takeCards(player, deck, 2);
    expect(deck).toHaveLength(54);
  });
});

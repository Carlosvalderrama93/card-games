import { describe, expect, test } from "vitest";
import { createDeck, takeCard } from "../../Others/cards";

describe.skip("Unit testing of 'takeCard' function", () => {
  test("Should add a card in the player's hand when 'takeCard' is invoked correctly", () => {
    const deck = createDeck();
    const player = {
      id: "user_1",
      hand: {
        id: "user_Hand",
        score: 0,
        cards: [],
      },
    };
    takeCard(player, deck);
    expect(player.hand.cards).toHaveLength(1);
  });

  test("Should reduce the length of 'deck' when 'takeCard' is invoked correctly", () => {
    const deck = createDeck();
    const player = {
      id: "user_1",
      hand: {
        id: "user_Hand",
        score: 0,
        cards: [],
      },
    };
    takeCard(player, deck);
    expect(deck).toHaveLength(55);
  });
});

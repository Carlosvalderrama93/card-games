import { describe, expect, test } from "vitest";
import { createDeck, dealCards } from "../../Others/cards";

describe.skip("Unit testing of 'dealCards' function", () => {
  test("Should add the number of cards specified in each player's hand when 'dealCards' is invoked correctly", () => {
    const deck = createDeck();
    const players = [
      {
        id: "user_1",
        hand: {
          id: "user_Hand",
          score: 0,
          cards: [],
        },
      },
      {
        id: "user_2",
        hand: {
          id: "user_Hand",
          score: 0,
          cards: [],
        },
      },
    ];
    dealCards(deck, players, 3);
    expect(players[0].hand.cards).toHaveLength(3);
    expect(players[1].hand.cards).toHaveLength(3);
  });

  test("Should reduce the length of  the'deck' when 'dealCards' is invoked correctly", () => {
    const deck = createDeck();
    const players = [
      {
        id: "user_1",
        hand: {
          id: "user_Hand",
          score: 0,
          cards: [],
        },
      },
      {
        id: "user_2",
        hand: {
          id: "user_Hand",
          score: 0,
          cards: [],
        },
      },
    ];
    dealCards(deck, players, 3);
    expect(deck).toHaveLength(50);
  });
});

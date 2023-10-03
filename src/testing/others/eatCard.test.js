import { test, describe, expect } from "vitest";

import eatCard from "../../Others/cards";
import { createDeck } from "../../Others/cards";

const startingDeck = createDeck();

describe.skip("Unit testing of 'eatCard' function", () => {
  test("Should render correctly when 'eatCard' is invoked with valid arguments", () => {
    const nextCard = eatCard(startingDeck);
    const cardKeys = Object.keys(nextCard);
    expect(cardKeys).toEqual(["toDeliverCards", "updatedDeck"]);
  });

  test("Should return an 'array.lenght === 2' when 'eatCard' is invoked with valid arguments", () => {
    const nextCard = eatCard(startingDeck);
    const cardKeysLength = Object.keys(nextCard).length;
    expect(cardKeysLength).toBe(2);
  });

  test("Should return an 'object' when 'eatCard' is invoked with valid arguments", () => {
    const nextCard = eatCard(startingDeck);
    const cardType = typeof nextCard;
    const isObject = cardType === "object";
    expect(isObject).toBeTruthy();
  });

  test("Should return 'undefined' when 'eatCard' is invoked without requiered arguments", () => {
    const nextCard = eatCard();
    expect(nextCard).toBeUndefined();
  });

  test("Should return 'undefined' when 'eatCard' is invoked with invalid arguments", () => {
    const nextCard = eatCard("startingDeck", "as");
    expect(nextCard).toBeUndefined();
  });
});

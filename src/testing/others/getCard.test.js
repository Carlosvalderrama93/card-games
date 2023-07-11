import { test, describe, expect } from "vitest";
import getCard from "../../Others/getCard";
import validProps from "../../Others/validProps";
import deckGenerator from "../../Others/deckGenerator";

const startingDeck = deckGenerator(validProps);

describe("Unit testing of 'getCard' function", () => {
  test("Should render correctly when 'getCard' is invoked with valid arguments", () => {
    const nextCard = getCard(startingDeck);
    const cardKeys = Object.keys(nextCard);
    expect(cardKeys).toEqual(["toDeliverCards", "updatedDeck"]);
  });

  test("Should return an 'array.lenght === 2' when 'getCard' is invoked with valid arguments", () => {
    const nextCard = getCard(startingDeck);
    const cardKeysLength = Object.keys(nextCard).length;
    expect(cardKeysLength).toBe(2);
  });

  test("Should return an 'object' when 'getCard' is invoked with valid arguments", () => {
    const nextCard = getCard(startingDeck);
    const cardType = typeof nextCard;
    const isObject = cardType === "object";
    expect(isObject).toBeTruthy();
  });

  test("Should return 'undefined' when 'getCard' is invoked without requiered arguments", () => {
    const nextCard = getCard();
    expect(nextCard).toBeUndefined();
  });

  test("Should return 'undefined' when 'getCard' is invoked with invalid arguments", () => {
    const nextCard = getCard("startingDeck", "as");
    expect(nextCard).toBeUndefined();
  });
});

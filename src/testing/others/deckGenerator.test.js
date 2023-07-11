import { test, describe, expect } from "vitest";
import deckGenerator from "../../Others/deckGenerator";
import validProps from "../../Others/validProps";

const rawDataDeck = validProps;

describe("Unit testing of 'deckGenerator' function", () => {
  test("Should render correctly when 'deckGenerator' is invoked with valid arguments", () => {
    const newDeck = deckGenerator(rawDataDeck);
    expect(newDeck).toBeTruthy();
  });

  test("Should return 'undefined' when 'deckGenerator' is invoked without arguments", () => {
    const newDeck = deckGenerator();
    expect(newDeck).toBeUndefined();
  });

  test("Should return 'undefined' when 'deckGenerator' is invoked with incomplete arguments", () => {
    const newDeck = deckGenerator({suite:[], rank:[]});
    expect(newDeck).toBeUndefined();
  });

  test("Should return 'undefined' when 'deckGenerator' is invoked with invalid arguments", () => {
    const newDeck = deckGenerator("rawDataDeck");
    expect(newDeck).toBeUndefined();
  });
});

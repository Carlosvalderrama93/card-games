import { test, describe, expect } from "vitest";

import { createDeck } from "../../Others/cards";

describe.skip("Unit testing of 'createDeck' function", () => {
  test("Should render correctly when 'createDeck' is invoked", () => {
    const deck = createDeck();
    expect(deck).toBeDefined();
  });
  test("Should render correctly when 'createDeck' is invoked wirh an argument", () => {
    const deck = createDeck({});
    expect(deck).toBeDefined();
  });
  test("Should return an array when 'createDeck' is invoked", () => {
    const deck = createDeck();
    const isArray = Array.isArray(deck);
    expect(isArray).toBeTruthy();
  });
  test("Should return and array with 56 elements when 'createDeck' is invoked", () => {
    const deck = createDeck();
    expect(deck).toHaveLength(56);
  });
});

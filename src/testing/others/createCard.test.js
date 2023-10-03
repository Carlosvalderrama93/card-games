import { describe, expect, test } from "vitest";
import { createCard } from "../../Others/cards";

const data = { id: 1, score: 11, rank: { A: 11 }, suite: "ACE", color: "RED" };

describe.skip("Unit testing of 'createCard' function", () => {
  test("Should render correctly when 'createCard' is invoked", () => {
    const card = createCard(data.id, data.rank, data.suite, data.color);
    expect(card).toBeTruthy();
  });
  test("Should return an object card with all its properties when 'createCard' is invoked", () => {
    const card = createCard(data.id, data.rank, data.suite, data.color);
    const toMatch = {
      id: "ace_1_red",
      color: "RED",
      suite: "ACE",
      rank: "A",
      score: 11,
    };

    expect(card).toMatchObject(toMatch);
  });

  //test("", () => {});
});

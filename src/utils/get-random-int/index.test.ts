import { describe, expect, test } from "@jest/globals";
import { getRandomInt } from ".";

test("get random int", () => {
  const result = getRandomInt(0, 10);

  expect(typeof result).toBe("number");
});

test("get random even int", () => {
  const result = getRandomInt(0, 10, 2);

  expect(result % 2).toBe(0);
});

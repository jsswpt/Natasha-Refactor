import { describe, expect, test } from "@jest/globals";
import { calculateCarNecessaryTime } from ".";

describe("calculate necessary time for car", () => {
  test("with cars count = 2", () => {
    expect(calculateCarNecessaryTime(2)).toBe(10);
  });

  test("with cars count = undefined", () => {
    expect(calculateCarNecessaryTime(undefined)).toBe(10);
  });

  test("with cars count = 15", () => {
    const result = calculateCarNecessaryTime(15);

    expect(result >= 10 && result <= 120).toBe(true);
  });
});

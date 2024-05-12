import { getRandomInt } from "../get-random-int";

export const calculateCarNecessaryTime = (value?: number | null) => {
  if (value) {
    if (value >= 5) {
      const result = value * 2;

      return getRandomInt(10, result > 120 ? 120 : result, 2);
    } else {
      return 10;
    }
  } else {
    return 10;
  }
};

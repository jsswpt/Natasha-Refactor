export const getRandomInt = (
  min: number,
  max: number,
  multiplicity?: number,
): number => {
  const generatedInt = Math.floor(Math.random() * (max - min + 1)) + min;

  if (multiplicity && multiplicity > 1) {
    if (generatedInt % multiplicity === 0) {
      return generatedInt;
    } else {
      return getRandomInt(min, max, multiplicity);
    }
  }

  return generatedInt;
};

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

const caesarCipher = (string, shift) => {};

export { capitalize, reverseString, calculator };

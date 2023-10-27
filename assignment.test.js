import {
  calculator,
  capitalize,
  reverseString,
  caesarCipher,
} from "./assignment";

test("Capitalize the first character of a string", () => {
  expect(capitalize("button")).toMatch("Button");
});

test("Reverses a given string", () => {
  expect(reverseString("button")).toMatch("nottub");
});

describe("Calculator", () => {
  test("Addition", () => {
    expect(calculator.add(1, 1)).toEqual(2);
  });
  test("Subtraction", () => {
    expect(calculator.subtract(2, 1)).toEqual(1);
  });
  test("Divide", () => {
    expect(calculator.divide(4, 2)).toEqual(2);
  });
  test("Multiply", () => {
    expect(calculator.multiply(3, 3)).toEqual(9);
  });
});

describe("Cesar Cipher", () => {
  test("Non wrapping", () => {
    expect(caesarCipher("b", 4)).toMatch("f");
  });
  test("Wrapping Z to A", () => {
    expect(caesarCipher("z", 1)).toMatch("a");
  });
  test("Case preservation", () => {
    expect(caesarCipher("Z", 1)).toMatch("A");
  });
  test("Ignore punctuation", () => {
    expect(caesarCipher("Hello!", 1)).toMatch("Ifmmp!");
  });
});

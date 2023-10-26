import { calculator, capitalize, reverseString } from "./assignment";

it("Capitalize the first character of a string", () => {
  expect(capitalize("button")).toMatch("Button");
});

it("Reverses a given string", () => {
  expect(reverseString("button")).toMatch("nottub");
});

describe("Calculator", () => {
  it("Addition", () => {
    expect(calculator.add(1, 1)).toEqual(2);
  });
  it("Subtraction", () => {
    expect(calculator.subtract(2, 1)).toEqual(1);
  });
  it("Divide", () => {
    expect(calculator.divide(4, 2)).toEqual(2);
  });
  it("Multiply", () => {
    expect(calculator.multiply(3, 3)).toEqual(9);
  });
});

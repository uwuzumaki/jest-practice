import { capitalize } from "./assignment";

it("Capitalize the first character of a string", () => {
  expect(capitalize("button")).toMatch("Button");
});

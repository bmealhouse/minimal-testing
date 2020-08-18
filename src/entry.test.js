const { add } = require("./entry");

test("adds two numbers", () => {
  expect(add(3, 4)).toBe(7);
});

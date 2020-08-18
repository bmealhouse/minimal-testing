import { add } from ".";

test("adds two numbers", () => {
  expect(add(3, 4)).toBe(7);
});

test("formats snapshot", () => {
  const data = { some: "data", structure: true };
  expect(formatSnapshot(data)).toMatchInlineSnapshot(`
    "{
      'some': 'data',
      'structure': true
    }"
  `);
});

function formatSnapshot(data: any) {
  return JSON.stringify(data, undefined, 2).replace(/"/g, "'");
}

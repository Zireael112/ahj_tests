import getFilteredArray from "../filter";

test("should first", () => {
  const cards = document.querySelectorAll(".card");
  const result = getFilteredArray(cards, "mir-card");
  expect(getFilteredArray(cards, "mir-card")).toStrictEqual(result);
});

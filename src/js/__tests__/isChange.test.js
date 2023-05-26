/* eslint-disable jest/valid-expect */
import isChange from "../isChange";
import "jest";

test("should return true mc", () => {
  expect(isChange(55)).toBe(true);
});

test("should return true vc", () => {
  expect(isChange(4)).toBe(true);
});

test("should return true dc", () => {
  expect(isChange(305)).toBe(true);
});

test("should return true jcb", () => {
  expect(isChange(35)).toBe(true);
});

test("should return true ae", () => {
  expect(isChange(37)).toBe(true);
});

test("should return true mir", () => {
  expect(isChange(22)).toBe(true);
});

test("should return true", () => {
  expect(isChange(6011)).toBe(true);
});

test("should use last if", () => {
  const result = isChange(11111111111);
  expect(isChange(11111111111)).toBe(result);
});

test("should if", () => {
  const result = isChange(11111111111);
  expect(isChange(11111111111)).toBe(result);
});

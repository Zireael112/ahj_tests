export default function getFilteredArray(cards, name) {
  const result = Array.from(cards).filter(
    (num) => !num.classList.contains(name)
  );

  result.forEach((e) => {
    e.classList.add("cdisabled");
  });
  return result;
}

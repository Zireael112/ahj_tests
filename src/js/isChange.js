import getFilteredArray from "./filter";

export default function isChange(value) {
  const cards = document.querySelectorAll(".card");

  const visaNum = 4;
  const masterNum = 55;
  const americanNum = 37;
  const discoverNum = 6011;
  const jcbNum = 35;
  const dinersNum = 305;
  const mirNum1 = 22;

  const calcValue1 = ("" + value).split("").slice(0, 1);
  const calcValue2 = ("" + value).split("").slice(0, 2);
  const calcValue3 = ("" + value).split("").slice(0, 3);
  const calcValue4 = ("" + value).split("").slice(0, 4);

  const currentValue1 = Number(calcValue1.join(""));
  const currentValue2 = Number(calcValue2.join(""));
  const currentValue3 = Number(calcValue3.join(""));
  const currentValue4 = Number(calcValue4.join(""));

  if (currentValue2 === mirNum1) {
    getFilteredArray(cards, "mir-card");
    return true;
  }

  if (currentValue1 === visaNum) {
    getFilteredArray(cards, "visa-card");
    return true;
  }

  if (currentValue2 === masterNum) {
    getFilteredArray(cards, "master-card");
    return true;
  }

  if (currentValue2 === americanNum) {
    getFilteredArray(cards, "american-express-card");
    return true;
  }

  if (currentValue3 === dinersNum) {
    getFilteredArray(cards, "diners-club-card");
    return true;
  }

  if (currentValue4 === discoverNum) {
    getFilteredArray(cards, "discover-card");
    return true;
  }

  if (currentValue2 === jcbNum) {
    getFilteredArray(cards, "JCB-card");
    return true;
  }

  if (
    currentValue2 !== mirNum1 &&
    currentValue1 !== visaNum &&
    currentValue2 !== masterNum &&
    currentValue2 !== americanNum &&
    currentValue4 !== discoverNum &&
    currentValue3 !== dinersNum &&
    currentValue2 !== jcbNum
  ) {
    const res = cards.forEach((e) => {
      e.classList.remove("cdisabled");
    });
    return res;
  }
}

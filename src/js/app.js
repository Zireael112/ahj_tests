import isChange from "./isChange";
import isValid from "./isValid";

window.addEventListener("DOMContentLoaded", () => {
  const inp = document.querySelector(".inp-card-widg");
  const btn = document.querySelector(".btn");

  inp.addEventListener("input", (e) => {
    isChange(e.target.value);
  });

  btn.addEventListener("click", () => {
    if (!inp.value) {
      return;
    }

    const result = isValid(inp.value);

    if (result) {
      const wr = document.querySelector(".wrapper");
      const oldDiv = document.querySelector(".result-valid");

      if (oldDiv) {
        oldDiv.remove();
      }

      const nodeDiv = document.createElement("div");
      nodeDiv.classList.add("result-valid");

      const cont = document.createTextNode(`
      Luhn Algorithm Check is TRUE    
      `);

      nodeDiv.appendChild(cont);
      const currentDiv = document.getElementById("div1");
      wr.insertBefore(nodeDiv, currentDiv);
    } else if (!result) {
      const wr = document.querySelector(".wrapper");
      const oldDiv = document.querySelector(".result-valid");

      if (oldDiv) {
        oldDiv.remove();
      }

      const nodeDiv = document.createElement("div");
      nodeDiv.classList.add("result-valid");

      const cont = document.createTextNode(`
      Luhn Algorithm Check is FALSE
      `);

      nodeDiv.appendChild(cont);
      const currentDiv = document.getElementById("div");
      wr.insertBefore(nodeDiv, currentDiv);
    }
  });
});

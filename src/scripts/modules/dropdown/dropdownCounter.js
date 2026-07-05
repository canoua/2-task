import dropdownSubmit from "./dropdownSubmit";
import { counter } from "../constants";

export default function dropdownCounter() {
  const minus = document.querySelectorAll(".dropdown-list__count_minus-js");
  const plus = document.querySelectorAll(".dropdown-list__count_plus-js");
  const submit = document.querySelector(".dropdown__submit");

  window.addEventListener("load", function () {
    minus.forEach(function (item) {
      if (item.nextElementSibling.textContent === "0") {
        item.classList.add("unactive-element");
        item.style.pointerEvents = "none";
        counter.count++;
      }
    });
    checkNullCount();
  });

  function checkNullCount() {
    if (counter.count == 3) {
      submit.style.display = "none";
    } else {
      submit.style.display = "block";
    }
  }

  minus.forEach(function (item) {
    item.addEventListener("click", function (event) {
      if (!item.classList.contains("unactive-element")) {
        event.preventDefault();

        if (item.nextElementSibling.textContent != 0) {
          item.nextElementSibling.textContent =
            item.nextElementSibling.textContent - 1;
        }
      }

      if (item.nextElementSibling.textContent == 0) {
        item.classList.add("unactive-element");
        item.style.pointerEvents = "none";
        counter.count++;
        checkNullCount();
      }
    });
  });

  plus.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      let output = item.previousElementSibling;
      let parent = item.parentElement;

      output.textContent = Number(output.textContent) + 1;
      parent.firstElementChild.classList.remove("unactive-element");
      parent.firstElementChild.style.pointerEvents = "auto";

      if (counter.count != 0) {
        counter.count--;
      }

      checkNullCount();
    });
  });
}

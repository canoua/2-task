import { dropdownOutput } from "../constants";

export function dropdownReset() {
  const countNumber = document.querySelectorAll(".dropdown-list__count_number");

  countNumber.forEach(function (item) {
    item.textContent = "0";
    item.previousElementSibling.classList.add("unactive-element");
  });

  dropdownOutput.textContent = "Сколько гостей";
}

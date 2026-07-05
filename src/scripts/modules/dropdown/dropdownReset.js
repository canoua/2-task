import { dropdownOutput } from "../constants";
import { counter } from "../constants";

export default function dropdownReset() {
  const countNumber = document.querySelectorAll(".dropdown-list__count_number");

  countNumber.forEach(function (item) {
    const submit = document.querySelector(".dropdown__submit");
    item.textContent = "0";
    item.previousElementSibling.classList.add("unactive-element");
    counter.count = 0;
    submit.style.display = "none";
  });

  dropdownOutput.textContent = "Сколько гостей";
}

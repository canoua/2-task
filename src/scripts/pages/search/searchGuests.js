import dropdownCounter from "../../modules/dropdown/dropdownCounter";
import dropdownSubmit from "../../modules/dropdown/dropdownSubmit";
import { content } from "../../modules/constants";
import { counter } from "../../modules/constants";
import { dropdownOutput } from "../../modules/constants";

export default function searchGuests() {
  const dropdown = document.querySelector("#dropdown-guests");
  const reset = document.querySelector(".dropdown__reset");
  const submit = document.querySelector(".dropdown__submit");

  dropdownCounter();

  if (dropdown) {
    dropdown.addEventListener("click", function () {
      content.classList.toggle("dropdown-content_active");
    });
  }

  if (submit) {
    submit.addEventListener("click", function (event) {
      dropdownSubmit(event);
    });
  }

  if (reset) {
    reset.addEventListener("click", function (event) {
      const countNumber = document.querySelectorAll(
        ".dropdown__guests-list__count_number",
      );

      countNumber.forEach(function (item) {
        const submit = document.querySelector(".dropdown__submit");
        item.textContent = "0";
        item.previousElementSibling.classList.add("unactive-element");
        counter.count = 0;
        submit.style.display = "none";
      });

      dropdownOutput.textContent = "Сколько гостей";
    });
  }

  // сделать через делегирование
  document.addEventListener("click", (event) => {
    const clickDocument = dropdown.contains(event.target);
    const clickContent = content.contains(event.target);

    if (!clickDocument && !clickContent) {
      content.classList.remove("dropdown-content_active");
    }
  });
}

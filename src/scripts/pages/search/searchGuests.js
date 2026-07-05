import { content } from "../../modules/constants";
import dropdownCounter from "../../modules/dropdown/dropdownCounter";
import dropdownReset from "../../modules/dropdown/dropdownReset";
import dropdownSubmit from "../../modules/dropdown/dropdownSubmit";
import { dropdownOutput } from "../../modules/constants";

export default function searchGuests() {
  const dropdown = document.querySelector("#dropdown-guests");
  const reset = document.querySelector(".dropdown__reset");
  const submit = document.querySelector(".dropdown__submit");

  dropdownCounter();

  if (dropdown) {
    dropdown.addEventListener("click", function () {
      content.classList.toggle("fe__dropdown-content_active");
    });
  }

  if (submit) {
    submit.addEventListener("click", function (event) {
      dropdownSubmit(event);
    });
  }

  if (reset) {
    reset.addEventListener("click", function (event) {
      dropdownReset(event);
    });
  }

  // сделать через делегирование
  document.addEventListener("click", (event) => {
    const clickDocument = dropdown.contains(event.target);
    const clickContent = content.contains(event.target);

    if (!clickDocument && !clickContent) {
      content.classList.remove("fe__dropdown-content_active");
    }
  });
}

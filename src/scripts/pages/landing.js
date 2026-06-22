import dropdownCounter from "../modules/dropdown/dropdownCounter";
import { dropdownOutput, content } from "../modules/constants";
import dropdownReset from "../modules/dropdown/dropdownReset";
import dropdownSubmit from "../modules/dropdown/dropdownSubmit";
import airDatePicker from "../libs/air-datepicker";

export default function landing() {
  const input = document.getElementById("card-landing__dropdown");
  const reset = document.querySelector(".dropdown__reset");
  const submit = document.querySelector(".dropdown__submit");

  // +, -, unactive -
  dropdownCounter();

  if (input) {
    input.addEventListener("click", function () {
      content.classList.toggle("fe__dropdown-content_active");
    });
  }

  if (submit) {
    submit.addEventListener("click", function (event) {
      dropdownSubmit(event);
    });
  }

  if (reset) {
    reset.addEventListener("click", function () {
      dropdownReset();
    });
  }

  document.addEventListener("click", (event) => {
    const clickDocument = input.contains(event.target);
    const clickContent = content.contains(event.target);

    if (!clickDocument && !clickContent) {
      content.classList.remove("fe__dropdown-content_active");
    }
  });

  if (document.querySelector(".calendar")) {
    airDatePicker();
  }
}

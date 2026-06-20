import airDatePicker from "../libs/air-datepicker";
import dropdownCounter from "../modules/dropdown/dropdownCounter";
import dropdownReset from "../modules/dropdown/dropdownReset";
import dropdownSubmit from "../modules/dropdown/dropdownSubmit";

export default function roomDetails() {
  const input = document.getElementById("rd-dropdown");
  const content = document.querySelector(".fe__dropdown-content");
  const reset = document.querySelector(".dropdown__reset");
  const submit = document.querySelector(".dropdown__submit");

  if (input) {
    input.addEventListener("click", function () {
      content.classList.toggle("fe__dropdown-content_active");
    });
  }

  dropdownCounter();

  if (reset) {
    reset.addEventListener("click", function () {
      dropdownReset();
    });
  }

  if (submit) {
    submit.addEventListener("click", function () {
      dropdownSubmit();
    });
  }

  airDatePicker();
}

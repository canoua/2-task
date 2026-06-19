import { dropdownOutput, content } from "../constants";

export default function dropdownSubmit() {
  const input = document.querySelectorAll(
    ".dropdown__guests-list__count_number",
  );
  const dropdownListItemName = document.querySelectorAll(
    ".dropdown-list__item_name",
  );
  let sum = 0;
  let guestsVar = "";
  let string;
  input.forEach(function (item) {
    sum += Number(item.textContent);
  });

  if (sum == 1 || (sum >= 21 && sum % 10 == 1)) {
    guestsVar = " гость";
  } else if (
    (sum >= 2 && sum <= 4) ||
    (sum >= 22 && sum % 10 >= 2 && sum % 10 <= 4)
  ) {
    guestsVar = " гостя";
  } else {
    guestsVar = " гостей";
  }

  string = sum + guestsVar;

  dropdownOutput.textContent = string;

  dropdownListItemName.forEach(function (item) {
    if (item.textContent == "младенцы") {
      let dropdownListCount = item.nextElementSibling;
      let countKids = dropdownListCount.childNodes[2];
      // упростить, баг после 20
      if (countKids.textContent != 0) {
        if (countKids.textContent == 1) {
          dropdownOutput.textContent =
            string + ", " + countKids.textContent + " младенец";
        } else if (
          countKids.textContent == 2 ||
          countKids.textContent == 3 ||
          countKids.textContent == 4
        ) {
          dropdownOutput.textContent =
            string + ", " + countKids.textContent + " младенца";
        } else {
          dropdownOutput.textContent =
            string + ", " + countKids.textContent + " младенцев";
        }
      }
    }
    content.classList.remove("fe__dropdown-content_active");
  });
}

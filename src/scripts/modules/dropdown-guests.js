export default function dropdownGuests() {
  let dropdown = document.querySelector(
    ".card-landing__dropdown-js > .card__input-wrapper-js",
  );
  let dropdownOutput = document.querySelector(
    ".card-landing__dropdown-js > .card__input-wrapper-js > .card__input-dropdown",
  );

  // выпадающий блок
  let dropdownContent = document.querySelector(".fe__dropdown__content");

  // кнопки
  let reset = document.querySelector(".dropdown__reset");
  let submit = document.querySelector(".dropdown__submit");

  function submitFunc() {
    let input = document.querySelectorAll(
      ".dropdown__guests-list__count_number",
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

    let dropdownListItemName = document.querySelectorAll(
      ".dropdown-list__item_name",
    );
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
      dropdownContent.classList.remove("fe__dropdown__content_active");
    });
  }

  function resetFunc() {
    let countNumber = document.querySelectorAll(".dropdown-list__count_number");
    countNumber.forEach(function (item) {
      item.textContent = "0";
      item.previousElementSibling.classList.add("unactive-element");
    });
    dropdownOutput.textContent = "Сколько гостей";
  }

  dropdown.addEventListener("click", function () {
    dropdownContent.classList.toggle("fe__dropdown__content_active");
  });

  // кнопка подтвердить
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    submitFunc();
  });

  // кнопка reset
  reset.addEventListener("click", function (event) {
    event.preventDefault();
    resetFunc();
  });
}

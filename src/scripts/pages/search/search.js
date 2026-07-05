import AirDatepicker from "air-datepicker";
import airDatePicker from "../../libs/air-datepicker";
import { content } from "../../modules/constants";
import dropdownCounter from "../../modules/dropdown/dropdownCounter";
import dropdownReset from "../../modules/dropdown/dropdownReset";
import dropdownSubmit from "../../modules/dropdown/dropdownSubmit";
import rangeSlider from "../../modules/range-slider";

export default function search() {
  const dropdown = document.querySelector("#dropdown-guests");
  const reset = document.querySelector(".dropdown__reset");
  const submit = document.querySelector(".dropdown__submit");
  const dropdownConvenience = document.querySelector("#dropdown-convenience");
  const convenienceContent = document.querySelector(
    ".search__dropdown-convenience__content",
  );
  const numberList = document.querySelectorAll(
    ".dropdown__convenience-list__count_number",
  );
  const expandableList = document.querySelector(
    ".search__expandable-checkbox-list",
  );
  const expandableListContent = document.querySelector(
    ".search__checkbox-list",
  );
  const dropdownConvenienceOutput = dropdownConvenience.querySelector(
    ".card__input-dropdown",
  );
  const btnPlus = document.querySelectorAll(
    ".dropdown__convenience-list__count_plus",
  );
  const btnMinus = document.querySelectorAll(
    ".dropdown__convenience-list__count_minus",
  );
  const bedroomsCount = document.querySelector(
    ".dropdown__convenience-list__count_bedrooms",
  );
  const bedsCount = document.querySelector(
    ".dropdown__convenience-list__count_beds",
  );
  const bathroomsCount = document.querySelector(
    ".dropdown__convenience-list__count_bathrooms",
  );

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

  dropdownConvenience.addEventListener("click", function () {
    convenienceContent.classList.toggle("fe__dropdown-content_active");
  });

  let convenience = {
    count: {
      bedrooms: 2,
      beds: 2,
      bathrooms: 0,
    },
    name: {
      bedroomsString: "спальни",
      bedsString: "кровати",
      bathroomsString: "ванных комнат",
    },
    plus: function (item) {
      if (item == "спальни") {
        this.count.bedrooms++;
        bedroomsCount.textContent = this.count.bedrooms;
        this.view();
      } else if (item == "кровати") {
        this.count.beds++;
        bedsCount.textContent = this.count.beds;
        this.view();
      } else if (item == "ванные комнаты") {
        this.count.bathrooms++;
        bathroomsCount.textContent = this.count.bathrooms;
        this.view();
      }
    },
    minus: function (item) {
      if (item == "спальни") {
        if (this.count.bedrooms > 0) {
          this.count.bedrooms--;
        }
        bedroomsCount.textContent = this.count.bedrooms;
        this.view();
      } else if (item == "кровати") {
        if (this.count.beds > 0) {
          this.count.beds--;
        }
        bedsCount.textContent = this.count.beds;
        this.view();
      } else if (item == "ванные комнаты") {
        if (this.count.bathrooms > 0) {
          this.count.bathrooms--;
        }
        bathroomsCount.textContent = this.count.bathrooms;
        this.view();
      }
    },
    rewriteString: function () {
      let str = `${this.count.bedrooms} ${this.name.bedroomsString}, ${this.count.beds} ${this.name.bedsString}, ${this.count.bathrooms} ${this.name.bathroomsString}`;
      return str;
    },
    // упростить, попробовать через массив
    declination: function () {
      if (
        this.count.bedrooms == 0 ||
        this.count.bedrooms == 5 ||
        (this.count.bedrooms % 10 >= 5 &&
          this.count.bathrooms % 10 <= 9 &&
          this.count.bedrooms >= 21)
      ) {
        this.name.bedroomsString = "спален";
      } else if (
        this.count.bedrooms == 1 ||
        (this.count.bedrooms >= 21 && this.count.bedrooms % 10 == 1)
      ) {
        this.name.bedroomsString = "спальня";
      } else if (
        this.count.bedrooms == 2 ||
        (this.count.bedrooms > 21 && this.count.bedrooms % 10 > 1)
      ) {
        this.name.bedroomsString = "спальни";
      }
      if (
        this.count.beds == 0 ||
        this.count.beds == 5 ||
        (this.count.beds % 10 >= 5 &&
          this.count.beds % 10 <= 9 &&
          this.count.beds >= 21)
      ) {
        this.name.bedsString = "кроватей";
      } else if (
        this.count.beds == 1 ||
        (this.count.beds >= 21 && this.count.beds % 10 == 1)
      ) {
        this.name.bedsString = "кровать";
      } else if (
        this.count.beds == 2 ||
        (this.count.beds > 21 && this.count.beds % 10 > 1)
      ) {
        this.name.bedsString = "кровати";
      }
      this.rewriteString();
    },
    changeCounter: function () {
      bedroomsCount.textContent = this.count.bedrooms;
      bathroomsCount.textContent = this.count.bathrooms;
      bedsCount.textContent = this.count.beds;
    },
    view: function () {
      let size = 20;

      this.rewriteString();
      this.changeCounter();
      this.declination();

      function addDots(string) {
        let str = string;
        let newStr = str.substring(0, size);
        if (str.length > size) {
          dropdownConvenienceOutput.textContent = newStr + "...";
        } else {
          dropdownConvenienceOutput.textContent = str;
        }
      }

      addDots(this.rewriteString());
    },
  };

  // загружаем данные из объекта при загрузке страницы
  window.addEventListener("load", convenience.view());

  numberList.forEach((item) => {
    if (item.textContent == 0) {
      item.parentElement.firstElementChild.classList.add("unactive-element");
    }
  });

  btnPlus.forEach(function (item) {
    item.addEventListener("click", function () {
      item.parentElement.firstElementChild.classList.remove("unactive-element");
      convenience.plus(
        item.parentElement.parentElement.firstElementChild.textContent,
      );
    });
  });

  btnMinus.forEach(function (item) {
    item.addEventListener("click", function () {
      convenience.minus(
        item.parentElement.parentElement.firstElementChild.textContent,
      );
      if (item.nextElementSibling.textContent == 0) {
        item.classList.add("unactive-element");
      }
    });
  });

  rangeSlider();

  if (expandableList) {
    expandableList.addEventListener("click", function () {
      expandableListContent.classList.toggle("search__checkbox-list_active");
      expandableList
        .querySelector(".material-icons.material-icons-expand")
        .classList.toggle("upside");
    });
  }

  // сделать через делегирование
  document.addEventListener("click", (event) => {
    const clickDocument = dropdown.contains(event.target);
    const clickDocumentOutsideConvenience = dropdownConvenience.contains(
      event.target,
    );
    const clickDocumentOutsideExpandable = expandableList.contains(
      event.target,
    );
    const clickContent = content.contains(event.target);
    const clickConvenienceContent = convenienceContent.contains(event.target);
    const clickExpandableListContent = expandableListContent.contains(
      event.target,
    );

    if (!clickDocument && !clickContent) {
      content.classList.remove("fe__dropdown-content_active");
    }

    if (!clickDocumentOutsideConvenience && !clickConvenienceContent) {
      convenienceContent.classList.remove("fe__dropdown-content_active");
    }

    if (!clickDocumentOutsideExpandable && !clickExpandableListContent) {
      expandableListContent.classList.remove("search__checkbox-list_active");
    }
  });

  let input1 = document.querySelector(".card__input-wrapper");
  let startDate = new Date("2026-08-19");
  let secondDate = new Date("2026-08-23");
  let endDate;

  let buttonApply = {
    className: "buttonAirData",
    content: "Применить",
    onClick: function () {
      let day1 = calendar.selectedDates[0].toLocaleString("ru-RU", {
        day: "2-digit",
      });
      let month1 = calendar.selectedDates[0].toLocaleString("ru-RU", {
        month: "long",
      });

      let day2 = calendar.selectedDates[1].toLocaleString("ru-RU", {
        day: "2-digit",
      });
      let month2 = calendar.selectedDates[1].toLocaleString("ru-RU", {
        month: "long",
      });

      calendar.hide();
    },
  };

  let calendar = new AirDatepicker(".calendar", {
    selectedDates: [new Date(), "19.08.2026"],
    range: true,
    classes: "air-datepicker-custom",
    dynamicRange: false,
    multipleDates: true,
    multipleDatesSeparator: " - ",
    startDate,
    secondDate: new Date(),
    endDate,
    dateFormat: "d MMM",
    navTitles: {
      days: '<div class = "air-datepicker-navTitle-custom">MMMM yyyy</div>',
    },
    buttons: ["clear", buttonApply],
    selectedDates: [startDate, "19.08.2026", secondDate, endDate],
    onSelect: function (date) {
      let val1 = date.formattedDate[0];
      let val2 = date.formattedDate[1];

      if (date.formattedDate[1] != undefined) {
        input1.value = val1;
      }
    },
    position({ $datepicker, $target, $pointer }) {
      // координаты инпута
      let coords = $target.getBoundingClientRect();
      let top = coords.y + 2 * coords.height + window.scrollY;
      let left = coords.x - 17;

      $datepicker.style.left = `${left}px`;
      $datepicker.style.top = `${top}px`;
      $pointer.style.display = "none";
    },
    onShow: (isFinished) => {
      const calendarContent = document.querySelector(".air-datepicker");

      if (calendarContent) {
        calendarContent.style.width = "320px";
      }
    },
  });
}

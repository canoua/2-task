import AirDatepicker from "air-datepicker";

export default function airDatePicker() {
  let input1 = document.querySelector(".input1");
  let input2 = document.querySelector(".input2");
  let startDate, secondDate, endDate;

  let buttonApply = {
    className: "buttonAirData",
    content: "Применить",
    onClick: function () {
      let day1 = calendar.selectedDates[0].toLocaleString("default", {
        day: "2-digit",
      });
      let month1 = calendar.selectedDates[0].toLocaleString("default", {
        month: "2-digit",
      });
      let year1 = calendar.selectedDates[0].toLocaleString("default", {
        year: "numeric",
      });

      let day2 = calendar.selectedDates[1].toLocaleString("default", {
        day: "2-digit",
      });
      let month2 = calendar.selectedDates[1].toLocaleString("default", {
        month: "2-digit",
      });
      let year2 = calendar.selectedDates[1].toLocaleString("default", {
        year: "numeric",
      });

      input1.value = `${day1}.${month1}.${year1}`;
      input2.value = `${day2}.${month2}.${year2}`;
      calendar.hide();
    },
  };

  let calendar = new AirDatepicker(".calendar", {
    selectedDates: [new Date()],
    range: true,
    classes: "air-datepicker-custom",
    dynamicRange: false,
    multipleDates: true,
    multipleDatesSeparator: "-",
    startDate,
    secondDate: new Date(),
    endDate,
    dateFormat: "dd.MM.yyyy",
    // для постоянного отображения после инициализации
    navTitles: {
      days: '<div class = "air-datepicker-navTitle-custom">MMMM yyyy</div>',
    },
    buttons: ["clear", buttonApply],
    selectedDates: [startDate, secondDate, endDate],
    onSelect: function (date) {
      let val1 = date.formattedDate[0];
      let val2 = date.formattedDate[1];

      if (date.formattedDate[1] != undefined) {
        input1.value = val1;
        input2.value = val2;
      } else {
        input2.value = null;
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
    prevHtml: '<div class="custom-prev"></div>',
    nextHtml: '<div class="custom-next"></div>',
  });

  input2.addEventListener("click", function () {
    calendar.show();
  });
}

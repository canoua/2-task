import AirDatepicker from "air-datepicker";
import '@styles/libs/air-datepicker.css'
import '@styles/libs/air-date-picker.scss'

export default function searchCalendar() {
  let input1 = document.querySelector(".input-wrapper");
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

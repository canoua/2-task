import AirDatepicker from 'air-datepicker';

export default function airDatePicker() {
  let input1 = document.querySelector('.input1');
  let input2 = document.querySelector('.input2');
  let startDate, secondDate, endDate;

  let buttonApply = {
    className: 'buttonAirData',
    content: 'Применить',
    onClick: function() {
      let day1 = calendar.selectedDates[0].toLocaleString("default", { day: "2-digit" });
      let month1 = calendar.selectedDates[0].toLocaleString("default", { month: "2-digit" });
      let year1 = calendar.selectedDates[0].toLocaleString("default", { year: "numeric" });

      let day2 = calendar.selectedDates[1].toLocaleString("default", { day: "2-digit" });
      let month2 = calendar.selectedDates[1].toLocaleString("default", { month: "2-digit" });
      let year2 = calendar.selectedDates[1].toLocaleString("default", { year: "numeric" });
      
      input1.value = `${day1}.${month1}.${year1}`;
      input2.value = `${day2}.${month2}.${year2}`;
    }
  }
  
  let calendar = new AirDatepicker('.calendar', {
    selectedDates: [new Date()],
    range: true,
    classes: 'air-datepicker-custom',
    dynamicRange: false,
    multipleDates: true,
    multipleDatesSeparator: '-',
    startDate,
    secondDate: new Date(),
    endDate,
    dateFormat: 'dd.MM.yyyy',
    // для постоянного отображения после инициализации
    // inline: true,
    navTitles: {
      days: '<div class = "air-datepicker-navTitle-custom">MMMM yyyy</div>',
    },
    buttons: ['clear', buttonApply],
    selectedDates: [startDate, secondDate, endDate],
    onSelect: function(date) {
      let val1 = date.formattedDate[0];
      let val2 = date.formattedDate[1];
      
      if(date.formattedDate[1]!=undefined) {
        input1.value = val1;
        input2.value = val2;
      } else {
        input2.value = null;
      }
    },
    position({$datepicker, $target, $pointer}) {
      // координаты инпута  
      let coords = $target.getBoundingClientRect();
      let top = coords.y + 2*coords.height + window.scrollY;
      let left = coords.x - 17;
  
      $datepicker.style.left = `${left}px`;
      $datepicker.style.top = `${top}px`;
      $pointer.style.display = 'none';
    },
    // prevHtml: `<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1757 8.01562V9.98438H3.98819L9.56632 15.6094L8.16007 17.0156L0.144441 9L8.16007 0.984375L9.56632 2.39062L3.98819 8.01562H16.1757Z" fill="#BC9CFF"/></svg>`
  });
  // calendar.show()
  // calendar.visible();
}
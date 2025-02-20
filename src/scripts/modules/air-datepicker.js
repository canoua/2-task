import AirDatepicker from 'air-datepicker';

export default function airDatePicker() {
  let buttonApply = {
    className: 'buttonAirData',
    content: 'Применить',
    onClick: function() {
    
      let input1 = document.querySelector('.input1');
      let input2 = document.querySelector('.input2');

      let day1 = calendar.selectedDates[0].toLocaleString("default", { day: "2-digit" });
      let month1 = calendar.selectedDates[0].toLocaleString("default", { month: "2-digit" });
      let year1 = calendar.selectedDates[0].toLocaleString("default", { year: "numeric" });

      let day2 = calendar.selectedDates[1].toLocaleString("default", { day: "2-digit" });
      let month2 = calendar.selectedDates[1].toLocaleString("default", { month: "2-digit" });
      let year2 = calendar.selectedDates[1].toLocaleString("default", { year: "numeric" });
      
      input1.value = `${day1}.${month1}.${year1}`;
      input2.value = `${day2}.${month2}.${year2}`;
      // input1.value = val1;
      // if(val2!=undefined) {
        // input2.value = val2;
      // } else {
        // input2.value = '';
      // }
      console.log(event.target);
      
    },
    // () => {
    //   let input1 = document.querySelector('.input1');
    //   let input2 = document.querySelector('.input2');
    //   input1.value = calendar.selectedDates[0];
    //   input2.value = calendar.selectedDates[1];
    // },
  }

  // let button = {
  //   content: 'Select 2021-07-26',
  //   className: 'custom-button-classname',
  // }

  let startDate, endDate;
  
  let calendar = new AirDatepicker('.calendar', {
    selectedDates: [new Date()],
    range: true,
    dynamicRange: false,
    multipleDatesSeparator: '-',
    startDate,
    endDate,
    dateFormat: 'dd.MM.yyyy',
    navTitles: {
      days: '<div>MMMM yyyy</div>'
    },
    buttons: ['clear', buttonApply],
    selectedDates: [startDate, endDate],
    onSelect: function(date, formattedDate, datepicker) {
      let input1 = document.querySelector('.input1');
      let input2 = document.querySelector('.input2');
      
      let val1 = date.formattedDate[0];
      let val2 = date.formattedDate[1];
      input1.value = val1;
      if(date.formattedDate[1]!=undefined) {
        input2.value = val2;
      } else {
        input2.value = '';
      }
      
    },
  });
}
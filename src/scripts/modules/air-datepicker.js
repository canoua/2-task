import AirDatepicker from 'air-datepicker';

export default function airDatePicker() {
  let buttonApply = {
    className: 'buttonAirData',
    content: 'Применить',
    onClick: () => {
      let input1 = document.querySelector('.input1');
      let input2 = document.querySelector('.input2');
      input1.value = calendar.selectedDates[0];
      input2.value = calendar.selectedDates[1];
    },
  }

  let button = {
    content: 'Select 2021-07-26',
    className: 'custom-button-classname',
  }

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
    buttons: [button, buttonApply],
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
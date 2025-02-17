import AirDatepicker from 'air-datepicker';

export default function airDatePicker() {
  let buttonApply = {
    className: 'buttonAirData',
    content: 'Применить',
    onClick: () => {
      let input1 = document.querySelector('.input1');
      let input2 = document.querySelector('.input2');
      // input2.value = calendar.selectedDates[1];
      let dateString = calendar.selectedDates[0]
      // const dayOfMonth = date.getDate();
      console.log(dateString.getDate());
      // попробовать использовать это
      /*
      var options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      }

      function getDate(str) {
        var date = new Date(str);
        return date.toLocaleString('ru', options)
      }

      console.log(getDate('2017-09-21T21:00:00.000Z'));
            
      */
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
    onSelect: (date)=> {
      // попытка не выводить дату в инпут   
      console.log("Выбранная дата:", date); // Для отладки, если нужно
    },
  });
}
import AirDatepicker from 'air-datepicker';

export default function airDatePicker() {
  let buttonApply = {
    className: 'buttonAirData',
    content: 'Применить'
  }

  let button = {
    content: 'Select 2021-07-26',
    className: 'custom-button-classname',
    onClick: (dp) => {
        let date = new Date('2021-07-26');
        dp.selectDate(date);
        // let dateN = dp.selectDate(date);
        console.log(startDate);
        // dp.setViewDate(date);
    }
  }

  let startDate;
  
  let calendar = new AirDatepicker('.calendar', {
    selectedDates: [new Date()],
    range: true,
    dynamicRange: true,
    multipleDates: true,
    multipleDatesSeparator: '',
    startDate,
    navTitles: {
      days: '<div>MMMM yyyy</div>'
    },
    buttons: [button, buttonApply],
    selectedDates: [startDate, '2021-07-25']
  });

  startDate = new Date(calendar.selectedDates[0]);
}

  new AirDatepicker('.calendar', {
    selectedDates: [new Date()],
    range: true,
    dynamicRange: true,
    multipleDates: true,
    multipleDatesSeparator: '',
    navTitles: {
      days: '<div>MMMM yyyy</div>'
    },
    buttons: [button, buttonApply],
    visible: true,
  });
import AirDatepicker from 'air-datepicker';

export default function airDatePicker() {
  let buttonApply = {
    className: 'buttonAirData',
    content: 'Применить'
  }
  
  new AirDatepicker('.calendar', {
    selectedDates: [new Date()],
    range: true,
    dynamicRange: true,
    multipleDates: true,
    multipleDatesSeparator: ' - ',
    navTitles: {
      days: '<div>MMMM yyyy</div>'
    },
    buttons: ['clear', buttonApply],
    visible: true,
  });
}
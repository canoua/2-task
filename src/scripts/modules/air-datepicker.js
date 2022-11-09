import AirDatepicker from 'air-datepicker';

export default function airDatePicker() {
  let button = {
    className: 'custom-button-classname',
  }

  // let arrows = document.querySelector('.air-datepicker-nav--action');
  
  new AirDatepicker('.calendar', {
    selectedDates: [new Date()],
    range: true,
    multipleDatesSeparator: ' - ',
    navTitles: {
        days: '<div>MMMM yyyy</div>'
    },
    buttons: ['clear'],
    visible: true
  });

  // console.log(arrows.childNodes);
}
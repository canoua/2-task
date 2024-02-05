import AirDatepicker from 'air-datepicker';

export default function airDatePicker() {
  let buttonApply = {
    className: 'buttonAirData',
    content: 'Применить'
  }
  
  new AirDatepicker('.calendar', {
    selectedDates: [new Date()],
    range: true,
    // dynamicRange: true,
    multipleDates: true,
    // multipleDatesSeparator: '',
    navTitles: {
      days: '<div>MMMM yyyy</div>'
    },
    buttons: ['clear', buttonApply],
    visible: true,
    // onRenderCell({date, cellType}) {
    //     // Disable all 12th dates in month
    //     if (cellType === 'day') {
    //         if (date.getDate() === 12) {
    //             return {
    //                 disabled: true,
    //                 classes: 'disabled-class',
    //                 attrs: {
    //                     title: 'Cell is disabled'
    //                 }
    //             }
    //         }
    //     }
    // }
  });

  new AirDatepicker('.calendar', {
    selectedDates: [new Date()],
    range: true,
    // dynamicRange: true,
    multipleDates: true,
    // multipleDatesSeparator: '',
    navTitles: {
      days: '<div>MMMM yyyy</div>'
    },
    buttons: ['clear', buttonApply],
    visible: true,
    // onRenderCell({date, cellType}) {
    //     // Disable all 12th dates in month
    //     if (cellType === 'day') {
    //         if (date.getDate() === 12) {
    //             return {
    //                 disabled: true,
    //                 classes: 'disabled-class',
    //                 attrs: {
    //                     title: 'Cell is disabled'
    //                 }
    //             }
    //         }
    //     }
    // }
  });
}

let btn = document.querySelector('.air-datepicker-cell.-day-');

function ready() {
  console.log(btn);
}

document.addEventListener("DOMContentLoaded", ready)
  
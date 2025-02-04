import AirDatepicker from 'air-datepicker';

export default function airDatePicker() {
  // let buttonApply = {
  //   className: 'buttonAirData',
  //   content: 'Применить'
  // }

  let dpMin, dpMax;

dpMin = new AirDatepicker('.input1', {
    onSelect({date}) {
        dpMax.update({
            minDate: date
        })
        dpMin.update({
            maxDate: date
        })
    }
})

// dpMax = new AirDatepicker('.input2', {
//     onSelect({date}) {
//         dpMin.update({
//             maxDate: date
//         })
//     }
// })

  // new AirDatepicker('.calendar', {
  //   selectedDates: [new Date()],
  //   range: true,
  //   dynamicRange: true,
  //   multipleDates: true,
  //   multipleDatesSeparator: '',
  //   navTitles: {
  //     days: '<div>MMMM yyyy</div>'
  //   },
  //   buttons: ['clear', buttonApply],
  //   visible: true
  // });
};
 
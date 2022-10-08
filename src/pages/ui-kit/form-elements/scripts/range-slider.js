console.log('range-slider');
import noUiSlider from 'nouislider';

const rangeSlider = document.querySelector('#range-slider');

if(rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [5000, 10000],
    connect: true,
    step: 5,
    range: {
        'min': 0,
        'max': 15000
    }
  });
}
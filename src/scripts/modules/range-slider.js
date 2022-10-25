import noUiSlider from 'nouislider';

function rangeSlider() {
  console.log('range-slider');
  const rangeSlider = document.querySelector('#range-slider');

  const outputValues1 = document.querySelector('.elements__item_state-1');
  const outputValues2 = document.querySelector('.elements__item_state-2');
  const output = [outputValues1, outputValues2];

  if(rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [5000, 10000],
      connect: true,
      step: 1,
      range: {
          'min': [0],
          'max': [15000]
      }
    });
    
    rangeSlider.noUiSlider.on('update', function(values, handle) {
      output[handle].textContent = Number(values[handle]).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: '0' });
    })
  }
}



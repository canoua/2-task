import rangeSlider from './modules/range-slider';
import mask from './modules/mask';
import airDatePicker from './modules/air-datepicker';

'use strict'

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('#range-slider')) rangeSlider();  
  if(document.querySelector('.card__input-masked')) mask();
  if(document.querySelector('.calendar')) airDatePicker();
})


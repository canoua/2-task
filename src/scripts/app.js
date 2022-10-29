import rangeSlider from './modules/range-slider';
import mask from './modules/mask';

'use strict'

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('#range-slider')) rangeSlider();  
  if(document.querySelector('.card__input-masked')) mask();
})


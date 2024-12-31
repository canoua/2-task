import rangeSlider from './modules/range-slider';
import mask from './modules/mask';
import searchDropdown from './modules/search-dropdown';
import dropdownCounter from './modules/dropdown-counter';
import landing from './modules/landing';
// import airDatePicker from './modules/air-datepicker';

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector('#range-slider')) rangeSlider();  
  if(document.querySelector('.card__input-masked')) mask();
  if(document.querySelector('.expandable-checkbox-list-default')) searchDropdown();
  if(document.querySelector('.dropdown-expanded-guests__form')) dropdownCounter();
  // упростить
  if(document.querySelector('.dropdown-list__count')) dropdownCounter();
  if(document.querySelector('.main-landing')) landing();
  // if(document.querySelector('.calendar')) airDatePicker();
})
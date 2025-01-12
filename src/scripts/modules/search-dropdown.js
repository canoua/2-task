export default function searchDropdown() {
  let input = document.querySelector('.expandable-checkbox-list-default > .checkbox__header ');
  let dropdown = document.querySelector('.search__checkbox__list');
  
  let dropdownConvenience = document.querySelector('.dropdown-expanded-guests__form > .dropdown-convenience');
    // выпадающий блок
  let dropdownContent = document.querySelector('.dropdown-convenience__content');
  let convenienceCount = document.querySelectorAll('.dropdown__convenience-list__count_number');

  let btnPlus = document.querySelectorAll('.dropdown__convenience-list__count_plus');
  
  let convenience = {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0
  }
  
    
  input.addEventListener('click', function() {
    dropdown.classList.toggle('search__checkbox__list_active')
  })

  dropdownConvenience.addEventListener('click', function() {
    dropdownContent.classList.toggle('fe__dropdown__content_active');
  })
}
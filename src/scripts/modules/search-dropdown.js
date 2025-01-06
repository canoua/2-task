export default function searchDropdown() {
  let input = document.querySelector('.expandable-checkbox-list-default > .checkbox__header ');
  let dropdown = document.querySelector('.search__checkbox__list');
  
  let dropdownConvenience = document.querySelector('.dropdown-expanded-guests__form > .dropdown-convenience');
    // выпадающий блок
  let dropdownContent = document.querySelector('.dropdown-convenience__content');


  input.addEventListener('click', function() {
    console.log('dropdown');
    dropdown.classList.toggle('search__checkbox__list_active')
  })

  dropdownConvenience.addEventListener('click', function() {
    console.log('удобства');
    dropdownContent.classList.toggle('fe__dropdown__content_active');
  })
}
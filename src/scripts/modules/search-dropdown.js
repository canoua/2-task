export default function searchDropdown() {
  let input = document.querySelector('.expandable-checkbox-list-default > .checkbox__header');
  let dropdown = document.querySelector('.search__checkbox__list');
  
  input.addEventListener('click', function() {
    console.log('dropdown');
    dropdown.classList.toggle('search__checkbox__list_active')
  })
}
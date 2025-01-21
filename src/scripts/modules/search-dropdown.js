export default function searchDropdown() {
  let input = document.querySelector('.expandable-checkbox-list-default > .checkbox__header ');
  let dropdown = document.querySelector('.search__checkbox__list');
  
  let dropdownConvenience = document.querySelector('.dropdown-expanded-guests__form > .dropdown-convenience');
  let dropdownConvenienceOutput = document.querySelector('.dropdown-expanded-guests__form > .dropdown-convenience > .card__input-wrapper > .card__input-dropdown');
  
    // выпадающий блок
  let dropdownContent = document.querySelector('.dropdown-convenience__content');
  // let convenienceCount = document.querySelectorAll('.dropdown__convenience-list__count_number');

  let btnPlus = document.querySelectorAll('.dropdown__convenience-list__count_plus');
  let btnMinus = document.querySelectorAll('.dropdown__convenience-list__count_minus');
  let resultCounter = document.querySelectorAll('.dropdown__convenience-list__count_number');
  
  let convenience = {
    bedrooms: 2,
    beds: 2,
    bathrooms: 0
  }

  function view() {
    window.addEventListener('load', function() {
      dropdownConvenienceOutput.textContent = `${convenience.bedrooms}спальни`;
    })
  }

  view();
 
  function sum() {
    let sum = 0;
    resultCounter.forEach(function(item) {
      // sum += parseInt(item.textContent);
    })
    return sum;
  } 

  btnPlus.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      let output = item.previousElementSibling;
      let parent = item.parentElement;

      output.textContent = Number(output.textContent) + 1;
      
      parent.firstElementChild.classList.remove('unactive-element');
      console.log(parent.parentElement.firstElementChild.textContent);
    })
  })


  btnMinus.forEach(function(item) {
    item.addEventListener('click', function(event) {
      if(!item.classList.contains('unactive-element')) {
        event.preventDefault();
        
        if(item.nextElementSibling.textContent != 0) {
          item.nextElementSibling.textContent = item.nextElementSibling.textContent - 1;
          console.log(sum());
        } 
      }

      if(item.nextElementSibling.textContent == 0) {
        item.classList.add('unactive-element');
      }

      // console.log(item.parentElement.parentElement.firstElementChild.textContent);
      if(item.parentElement.parentElement.firstElementChild.textContent == 'спальни') {
        convenience.bedrooms--;
        console.log(convenience.bedrooms);
      } else if(item.parentElement.parentElement.firstElementChild.textContent == 'кровати') {
        convenience.bathrooms--;
        console.log(convenience.bathrooms);
      } else if(item.parentElement.parentElement.firstElementChild.textContent == 'ванные комнаты') {
        convenience.beds--;
        console.log(convenience.bathrooms);
      }
    })
  })
  
    
  input.addEventListener('click', function() {
    dropdown.classList.toggle('search__checkbox__list_active')
  })

  dropdownConvenience.addEventListener('click', function() {
    dropdownContent.classList.toggle('fe__dropdown__content_active');
  })
}
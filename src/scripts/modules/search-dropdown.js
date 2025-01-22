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

  let bedroomsCount = document.querySelector('.dropdown__convenience-list__count_bedrooms');
  let bathroomsCount = document.querySelector('.dropdown__convenience-list__count_bathrooms');
  let bedsCount = document.querySelector('.dropdown__convenience-list__count_beds');
  
  let convenience = {
    bedrooms: 1,
    bathrooms: 2,
    beds: 0
  }

  function view() {
    window.addEventListener('load', function() {
      bedroomsCount.textContent = convenience.bedrooms;
      bathroomsCount.textContent = convenience.bathrooms;
      bedsCount.textContent = convenience.beds;
      dropdownConvenienceOutput.textContent = `${convenience.bedrooms} спальни`;
    })
  }

  view();


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
        dropdownConvenienceOutput.textContent = `${convenience.bedrooms} спальни`;
        console.log(convenience.bedrooms);
      } else if(item.parentElement.parentElement.firstElementChild.textContent == 'кровати') {
        convenience.bathrooms--;
        dropdownConvenienceOutput.textContent = `${convenience.bathrooms} кровати`;
        console.log(convenience.bathrooms);
      } else if(item.parentElement.parentElement.firstElementChild.textContent == 'ванные комнаты') {
        convenience.beds--;
        dropdownConvenienceOutput.textContent = `${convenience.beds} ванные комнаты`;
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
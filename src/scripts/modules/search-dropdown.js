export default function searchDropdown() {
  let input = document.querySelector('.expandable-checkbox-list-default > .checkbox__header ');
  let dropdown = document.querySelector('.search__checkbox__list');
  
  let dropdownConvenience = document.querySelector('.dropdown-expanded-guests__form > .dropdown-convenience');
  let dropdownConvenienceOutput = document.querySelector('.dropdown-expanded-guests__form > .dropdown-convenience > .card__input-wrapper > .card__input-dropdown');
  
  // выпадающий блок
  let dropdownContent = document.querySelector('.dropdown-convenience__content');
  // кнопки в dropdown удобства
  let btnPlus = document.querySelectorAll('.dropdown__convenience-list__count_plus');
  let btnMinus = document.querySelectorAll('.dropdown__convenience-list__count_minus');

  // bedrooms-спальни
  let bedroomsCount = document.querySelector('.dropdown__convenience-list__count_bedrooms');
  // beds - кровати
  let bedsCount = document.querySelector('.dropdown__convenience-list__count_beds');
  // ванные комнаты
  let bathroomsCount = document.querySelector('.dropdown__convenience-list__count_bathrooms');

  let convenience = {
    bedrooms: 2,
    beds: 2,
    bathrooms: 0,
    minus: function(item) {
      if(item > 0) {
        
      }
    }
  }

  function view() {
    bedroomsCount.textContent = convenience.bedrooms;
    bathroomsCount.textContent = convenience.bathrooms;
    bedsCount.textContent = convenience.beds;
    
    let size = 21,
      str = `${convenience.bedrooms} спальни, ${convenience.beds} кроватей, ${convenience.bathrooms} ванных комнат`,
      newStr = str.substring(0, size);

    if(str.length>size) {
      dropdownConvenienceOutput.textContent = newStr + '...';
    } else {
      dropdownConvenienceOutput.textContent = str;
    }
  }

  // загружаем данные из объекта при загрузке страницы
  window.addEventListener('load', view());

  btnPlus.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      let parent = item.parentElement;
      
      parent.firstElementChild.classList.remove('unactive-element');

      if(parent.parentElement.firstElementChild.textContent == 'спальни') {
        convenience.bedrooms++;
        bedroomsCount.textContent = convenience.bedrooms; 
        view();
      } else if(parent.parentElement.firstElementChild.textContent == 'кровати') {
        convenience.beds++;
        bedsCount.textContent = convenience.beds;
        view();
      } else if(parent.parentElement.firstElementChild.textContent == 'ванные комнаты') {
        convenience.bathrooms++;
        bathroomsCount.textContent = convenience.bathrooms;
        view();
      }
    })
  })


  btnMinus.forEach(function(item) {
    item.addEventListener('click', function(event) {
      if(!item.classList.contains('unactive-element')) {
        event.preventDefault();
        if(item.nextElementSibling.textContent != 0) {
          item.nextElementSibling.textContent = item.nextElementSibling.textContent - 1;
        } 
      }

      if(item.nextElementSibling.textContent == 0) {
        item.classList.add('unactive-element');
      }

      // bedrooms-спальни
      if(item.parentElement.parentElement.firstElementChild.textContent == 'спальни') {
        if(convenience.bedrooms>0) {
          convenience.bedrooms--;
        }
        bedroomsCount.textContent = convenience.bedrooms;
        view();
        // beds - кровати
      } else if(item.parentElement.parentElement.firstElementChild.textContent == 'кровати') {
        if(convenience.beds>0) {
          convenience.beds--;
        }
        bedsCount.textContent = convenience.beds;
        view();
      } else if(item.parentElement.parentElement.firstElementChild.textContent == 'ванные комнаты') {
        if(convenience.bathrooms>0) {
          convenience.bathrooms--;
        }
        bathroomsCount.textContent = convenience.bathrooms;
        view();
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
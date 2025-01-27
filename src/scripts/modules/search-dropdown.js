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
    plus: function(item) {
      if(item == 'спальни') {
        this.bedrooms++;
        bedroomsCount.textContent = this.bedrooms; 
        this.view()
      } else if(item == 'кровати') {
        this.beds++;
        bedsCount.textContent = this.beds;
        this.view()
      } else if(item == 'ванные комнаты') {
        this.bathrooms++;
        bathroomsCount.textContent = this.bathrooms;
        this.view()
      }
    },
    minus: function(item) {
      if(item == 'спальни') {
        if(this.bedrooms > 0) {
          this.bedrooms--;
        }
        bedroomsCount.textContent = this.bedrooms;
        this.view();
      } else if(item == 'кровати') {
        if(this.beds > 0) {
          this.beds--;
        }
        bedsCount.textContent = this.beds;
        this.view();
      } else if(item == 'ванные комнаты') {
        if(this.bathrooms > 0) {
          this.bathrooms--;
        }
        bathroomsCount.textContent = this.bathrooms;
        this.view();
      }
    },
    view: function() {
      let size = 21,
        bedroomsString = 'спальни',
        bedsString = 'кровати',
        bathroomsString = 'ванных комнат',
        str = `${this.bedrooms} ${bedroomsString}, ${this.beds} ${bedsString}, ${this.bathrooms} ${bathroomsString}`;
      
        bedroomsCount.textContent = this.bedrooms;
        bathroomsCount.textContent = this.bathrooms;
        bedsCount.textContent = this.beds;

      function addDots() {
        let newStr = str.substring(0, size);
        if(str.length>size) {
          dropdownConvenienceOutput.textContent = newStr + '...';
        } else {
          dropdownConvenienceOutput.textContent = str;
        }
      }

      addDots();
    }
  }

  // загружаем данные из объекта при загрузке страницы
  window.addEventListener('load', convenience.view());

  btnPlus.forEach(function(item) {
    item.addEventListener('click', function() { 
      item.parentElement.firstElementChild.classList.remove('unactive-element');
      convenience.plus(item.parentElement.parentElement.firstElementChild.textContent);
    })
  })


  btnMinus.forEach(function(item) {
    item.addEventListener('click', function() {
      convenience.minus(item.parentElement.parentElement.firstElementChild.textContent);
      if(item.nextElementSibling.textContent == 0) {
        item.classList.add('unactive-element');
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
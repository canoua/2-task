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
    count: {
      bedrooms: 2,
      beds: 2,
      bathrooms: 0,
    },
    name: {

    },
    plus: function(item) {
      if(item == 'спальни') {
        this.count.bedrooms++;
        bedroomsCount.textContent = this.count.bedrooms; 
        this.view()
      } else if(item == 'кровати') {
        this.count.beds++;
        bedsCount.textContent = this.count.beds;
        this.view()
      } else if(item == 'ванные комнаты') {
        this.count.bathrooms++;
        bathroomsCount.textContent = this.count.bathrooms;
        this.view()
      }
    },
    minus: function(item) {
      if(item == 'спальни') {
        if(this.count.bedrooms > 0) {
          this.count.bedrooms--;
        }
        bedroomsCount.textContent = this.count.bedrooms;
        this.view();
      } else if(item == 'кровати') {
        if(this.count.beds > 0) {
          this.count.beds--;
        }
        bedsCount.textContent = this.count.beds;
        this.view();
      } else if(item == 'ванные комнаты') {
        if(this.count.bathrooms > 0) {
          this.count.bathrooms--;
        }
        bathroomsCount.textContent = this.count.bathrooms;
        this.view();
      }
    },
    rewriteString: function() {
      
    },
    view: function() {
      let size = 21,
        bedroomsString = 'спальни',
        bedsString = 'кровати',
        bathroomsString = 'ванных комнат',
        str = `${this.count.bedrooms} ${bedroomsString}, ${this.count.beds} ${bedsString}, ${this.count.bathrooms} ${bathroomsString}`;
      
        bedroomsCount.textContent = this.count.bedrooms;
        bathroomsCount.textContent = this.count.bathrooms;
        bedsCount.textContent = this.count.beds;

      // function editString() {
        if(this.count.bedrooms==0 || this.count.bedrooms==5) {
          bedroomsString = 'спален';
          str = `${this.count.bedrooms} ${bedroomsString}, ${this.count.beds} ${bedsString}, ${this.count.bathrooms} ${bathroomsString}`;
        } else if(this.bedrooms==1) {
          bedroomsString = 'спальня';
          str = `${this.count.bedrooms} ${bedroomsString}, ${this.count.beds} ${bedsString}, ${this.count.bathrooms} ${bathroomsString}`;
        } else if(this.bedrooms==2) {
          bedroomsString = 'спальни';
          str = `${this.count.bedrooms} ${bedroomsString}, ${this.count.beds} ${bedsString}, ${this.count.bathrooms} ${bathroomsString}`;
        }
      // }

      // editString()
        

      function addDots() {
        let newStr = str.substring(0, size);
        if(str.length > size) {
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
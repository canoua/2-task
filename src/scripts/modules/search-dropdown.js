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
      bedroomsString: 'спальни',
      bedsString: 'кровати',
      bathroomsString: 'ванных комнат'
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
      let str = `${this.count.bedrooms} ${this.name.bedroomsString}, ${this.count.beds} ${this.name.bedsString}, ${this.count.bathrooms} ${this.name.bathroomsString}`;
      return str;
    },
    view: function() {
      let size = 20;      

      this.rewriteString;

      bedroomsCount.textContent = this.count.bedrooms;
      bathroomsCount.textContent = this.count.bathrooms;
      bedsCount.textContent = this.count.beds;

      // доработать
      if(this.count.bedrooms==0 || this.count.bedrooms==5  || (this.count.bedrooms%10>=5 && this.count.bathrooms%10<=9 && this.count.bedrooms>=21)) {
        this.name.bedroomsString = 'спален';
        this.rewriteString();
      } else if((this.count.bedrooms==1) || (this.count.bedrooms>=21 && this.count.bedrooms%10==1)) {
        this.name.bedroomsString = 'спальня';
        this.rewriteString();
      } else if((this.count.bedrooms==2) || (this.count.bedrooms>21 && this.count.bedrooms%10>1)) {
        this.name.bedroomsString = 'спальни';
        this.rewriteString();
      }
 
      function addDots(string) {
        let str = string;
        let newStr = str.substring(0, size);
        if(str.length > size) {
          dropdownConvenienceOutput.textContent = newStr + '...';
        } else {
          dropdownConvenienceOutput.textContent = str;
        }
      }

      addDots(this.rewriteString());
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
export default function landing() {  
  let dropdown = document.querySelector('.card-landing__dropdown-js > .card__input-wrapper-js');
  let dropdownOutput = document.querySelector('.card-landing__dropdown-js > .card__input-wrapper-js > .card__input-dropdown');
  
  // выпадающий блок
  let dropdownContent = document.querySelector('.fe__dropdown__content');
  
  // кнопки
  let reset = document.querySelector('.dropdown__reset');
  let submit = document.querySelector('.dropdown__submit');

  dropdown.addEventListener('click', function() {
    dropdownContent.classList.toggle('fe__dropdown__content_active')
  })

  reset.addEventListener('click', function(event) {
    event.preventDefault();
    let countNumber = document.querySelectorAll('.dropdown-list__count_number');
    
    countNumber.forEach(function(item) {
      item.textContent = '0';
      item.previousElementSibling.classList.add('unactive-element')
    })

    dropdownOutput.textContent = 'Сколько гостей';
  })

  submit.addEventListener('click', function(event) {
    event.preventDefault();
    let input = document.querySelectorAll('.dropdown-list__count_number')
    let sum = 0;
    input.forEach(function(item) {
      sum += Number(item.textContent)
    })
    
    if((sum == 1) || ((sum >= 21) && (sum % 10 == 1))) {
      dropdownOutput.textContent = sum + ' гость';
    } else if((sum >= 2 && sum <=4) || ((sum >= 22) && (sum % 10 >= 2 && sum % 10 <= 4))) {
      dropdownOutput.textContent = sum + ' гостя';
    } else if((sum >= 5) && (sum <= 9) || ((sum >= 11) && (sum <= 19)) || (sum % 10 == 0) || ((sum >= 25) && (sum % 10 >= 5 && sum % 10 <= 9))) {
      dropdownOutput.textContent = sum + ' гостей';
    }

    let dropdownListItemName = document.querySelectorAll('.dropdown-list__item_name');
    dropdownListItemName.forEach(function(item) {
      if(item.textContent == 'младенцы') {
        let dropdownListCount = item.nextElementSibling;
        let countKids = dropdownListCount.childNodes[2];
        if(countKids.textContent != 0) {
          
          dropdownOutput.textContent = sum + ' гостей' + ', ' + countKids.textContent + ' младенцы';
        }
      }
    })
  })
}
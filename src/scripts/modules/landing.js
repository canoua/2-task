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
    // упростить по возможности
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
        // упростить, доделать 
        if(countKids.textContent != 0) {
          if(countKids.textContent == 1) {
            dropdownOutput.textContent = sum + ' гостей' + ', ' + countKids.textContent + ' младенец';
          } else if(countKids.textContent == 2 || countKids.textContent == 3 || countKids.textContent == 4 ) {
            dropdownOutput.textContent = sum + ' гостей' + ', ' + countKids.textContent + ' младенца';
          } else if(countKids.textContent == 5 || countKids.textContent == 6 || countKids.textContent == 7 || countKids.textContent == 8 || countKids.textContent == 9 || countKids.textContent >= 10 ) {
            dropdownOutput.textContent = sum + ' гостей' + ', ' + countKids.textContent + ' младенцев';
          }
          // dropdownOutput.textContent = sum + ' гостей' + ', ' + countKids.textContent + ' младенцы';
        }
      }
    })
  })
}
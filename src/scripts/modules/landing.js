export default function landing() {  
  let dropdown = document.querySelector('.card-landing__dropdown');
  let dropdownContent = document.querySelector('.fe__dropdown__content');
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
  })

  submit.addEventListener('click', function(event) {
    event.preventDefault();
  })
}
export default function dropdownCounter() {
  let minus = document.querySelectorAll('.dropdown-list__count_minus');
  let plus = document.querySelectorAll('.dropdown-list__count_plus');

  minus.forEach(function(item) {
    item.addEventListener('click', function(event) {
      if(!item.classList.contains('unactive-element')) {
        event.preventDefault();
        console.log('minus');
        // let input = item.nextElementSibling;
        // input.textContent = input.textContent - 1;
      }
    })
  })

  plus.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('plus');
      // let input = item;
        // input.textContent = input.textContent - 1;
    })
  })
}
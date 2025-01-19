export default function dropdownCounter() {
  let minus = document.querySelectorAll('.dropdown-list__count_minus-js');
  let plus = document.querySelectorAll('.dropdown-list__count_plus-js');
  
  document.addEventListener('DOMContentLoaded', function() {
    minus.forEach(function(item) {
      if(item.nextElementSibling.textContent == 0) {
        item.classList.add('unactive-element');
      }
    })
  })

  minus.forEach(function(item) {
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
    })
  })

  plus.forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      let output = item.previousElementSibling;
      let parent = item.parentElement;

      output.textContent = Number(output.textContent) + 1;
      parent.firstElementChild.classList.remove('unactive-element');
    })
  })
}

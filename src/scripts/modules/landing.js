export default function landing() {  
  let dropdown = document.querySelector('.card-landing__dropdown');
  let dropdownContent = document.querySelector('.fe__dropdown__content');
  // fe__dropdown__content
  dropdown.addEventListener('click', function() {
    dropdownContent.classList.toggle('fe__dropdown__content_active')
  })
}
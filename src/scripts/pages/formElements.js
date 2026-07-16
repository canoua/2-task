import rangeSlider from "../modules/range-slider";

export default function formElements() {
  if (document.querySelector("#range-slider")) rangeSlider();
  if (document.querySelector('.fe__pagination')) {
    const paginationListItemActive = document.querySelector('.pagination__list').firstChild;
    paginationListItemActive.querySelector('.pagination__link').classList.add('pagination__link_active'); 
  }
}

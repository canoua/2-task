export default function searchPagination() {
  const paginationListItemActive = document.querySelector('.pagination__list').firstChild;
 
  paginationListItemActive.querySelector('.pagination__link').classList.add('pagination__link_active'); 
}
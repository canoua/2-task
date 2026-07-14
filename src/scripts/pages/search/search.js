import rangeSlider from "../../modules/range-slider";
import searchExpandable from "./searchExpandable";
import searchCalendar from "./searchCalendar";
import searchConvenience from "./searchConvenience";
import searchGuests from "./searchGuests";
import searchPagination from "./searchPagination";

export default function search() {
  if(document.querySelector('.calendar')) searchCalendar();
  searchGuests();
  rangeSlider();
  searchConvenience();
  searchExpandable();
  searchPagination();
}

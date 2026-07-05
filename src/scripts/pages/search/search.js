import rangeSlider from "../../modules/range-slider";
import searchExpandable from "./searchExpandable";
import searchCalendar from "./searchCalendar";
import searchConvenience from "./searchConvenience";
import searchGuests from "./searchGuests";

export default function search() {
  searchCalendar();
  searchGuests();
  rangeSlider();
  searchConvenience();
  searchExpandable();
}

import rangeSlider from "./modules/range-slider";
import mask from "./modules/mask";
import search from "./pages/search";
import dropdownCounter from "./modules/dropdown/dropdownCounter";
import dropdownGuests from "./modules/dropdown-guests";
import airDatePicker from "./libs/air-datepicker";
import burger from "./modules/burger";
import roomDetails from "./pages/roomDetails";
import landing from "./pages/landing";
import signUp from "./pages/signUp";

("use strict");

document.addEventListener("DOMContentLoaded", () => {
  // if (document.querySelector("#range-slider")) rangeSlider();
  // if (document.querySelector(".card__input-masked")) mask();
  if (document.querySelector(".expandable-checkbox-list-default")) search();
  // if (document.querySelector(".dropdown-expanded-guests__form"))
  //   dropdownCounter();
  // if (document.querySelector(".app-js-dropdown")) dropdownGuests();
  // if (document.querySelector(".calendar")) airDatePicker();
  // if (document.querySelector(".burger")) burger();
  if (document.querySelector("#rd-dropdown")) roomDetails();
  if (document.querySelector("#sign-up-js")) signUp();
  if (document.querySelector("#landing-js")) landing();
});

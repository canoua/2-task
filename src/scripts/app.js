import rangeSlider from "./modules/range-slider";
import search from "./pages/search";
import dropdownCounter from "./modules/dropdown/dropdownCounter";
import dropdownGuests from "./modules/dropdown-guests";
import airDatePicker from "./libs/air-datepicker";
import burger from "./modules/burger";
import roomDetails from "./pages/roomDetails";
import landing from "./pages/landing";
import signUp from "./pages/signUp";
import formElements from "./pages/formElements";
import signIn from "./pages/signIn";

("use strict");

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#search-js")) search();
  // if (document.querySelector(".dropdown-expanded-guests__form"))
  //   dropdownCounter();
  // if (document.querySelector(".app-js-dropdown")) dropdownGuests();
  // if (document.querySelector(".burger")) burger();
  if (document.querySelector("#rd-dropdown")) roomDetails();
  if (document.querySelector("#sign-up-js")) signUp();
  if (document.querySelector("#landing-js")) landing();
  if (document.querySelector("#fe-js")) formElements();
  if (document.querySelector("#sign-in-js")) signIn();
});

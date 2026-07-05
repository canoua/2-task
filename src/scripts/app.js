import search from "./pages/search/search";
import roomDetails from "./pages/roomDetails";
import landing from "./pages/landing";
import signUp from "./pages/signUp";
import formElements from "./pages/formElements";
import signIn from "./pages/signIn";

("use strict");

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#search-js")) search();
  if (document.querySelector("#rd-dropdown")) roomDetails();
  if (document.querySelector("#sign-up-js")) signUp();
  if (document.querySelector("#landing-js")) landing();
  if (document.querySelector("#fe-js")) formElements();
  if (document.querySelector("#sign-in-js")) signIn();
});

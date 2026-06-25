import mask from "../modules/mask";

export default function signUp() {
  const submitSignUp = document.querySelector(".sign-up__submit");

  submitSignUp.addEventListener("click", function (event) {
    event.preventDefault();
  });

  mask();
}

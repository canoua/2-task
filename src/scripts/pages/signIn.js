export default function signIn() {
  const submitSignIn = document.querySelector(".sign-in__submit");

  submitSignIn.addEventListener("click", function (event) {
    event.preventDefault();
  });
}

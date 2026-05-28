export default function burger() {
  const btnBurger = document.querySelector(".burger");
  const btnClose = document.querySelector(".btn-close");
  const mobileMenu = document.querySelector(".mobile-menu");

  btnBurger.addEventListener("click", function () {
    mobileMenu.style.right = "0";
  });

  if (btnClose) {
    btnClose.addEventListener("click", function () {
      mobileMenu.style.right = "-100%";
    });
  }
}

export default function landing() {
  const input = document.getElementById("card-landing__dropdown");
  const content = document.querySelector(".fe__dropdown-content");

  if (input) {
    input.addEventListener("click", function () {
      content.classList.toggle("fe__dropdown-content_active");
    });
  }
}

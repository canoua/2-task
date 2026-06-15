export default function roomDetails() {
  const input = document.getElementById("rd-dropdown");
  const content = document.querySelector(".fe__dropdown-content");

  if (input) {
    input.addEventListener("click", function () {
      content.classList.toggle("fe__dropdown-content_active");
    });
  }
}

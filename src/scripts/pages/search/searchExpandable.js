export default function searchExpandable() {
  const expandableList = document.querySelector(
    ".search__expandable-checkbox-list",
  );
  const expandableListContent = document.querySelector(
    ".search__checkbox-list",
  );
  if (expandableList) {
    expandableList.addEventListener("click", function () {
      expandableListContent.classList.toggle("search__checkbox-list_active");
      expandableList
        .querySelector(".material-icons.material-icons-expand")
        .classList.toggle("upside");
    });
  }

  document.addEventListener("click", (event) => {
    const clickDocumentOutsideExpandable = expandableList.contains(
      event.target,
    );
    const clickExpandableListContent = expandableListContent.contains(
      event.target,
    );
    if (!clickDocumentOutsideExpandable && !clickExpandableListContent) {
      expandableListContent.classList.remove("search__checkbox-list_active");
    }
  });
}

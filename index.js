function dropdownModule() {
  const dropDownMenu = document.getElementsByClassName("drop-down-menu");
  const dropDownNode = document.getElementsByClassName("drop-down");

  [...dropDownMenu].forEach((menu) => {
    menu.addEventListener("click", (event) => {
      let dropDown = menu.querySelector(".drop-down");
      if (dropDown.style.display != "none") {
        dropDown.style.display = "none";
      } else {
        dropDown.style.display = "block";
      }
    });
  });
}

dropdownModule.exports = dropdownModule;

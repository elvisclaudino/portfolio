function openMenu() {
  let openMenuBar = document.getElementById("menu__bar");

  if (openMenuBar.style.width === "0px") {
    openMenuBar.style.width = "180px";
  } else {
    openMenuBar.style.width = "0px";
  }
}

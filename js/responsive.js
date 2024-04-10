function toggleMenu() {
  let menuList = document.getElementById("menuList");
  let menu = document.querySelector(".menu");
  if (menu.classList.contains("open")) {
    menuList.style.maxHeight = "0px";
    menu.classList.remove("open");
  } else {
    menuList.style.maxHeight = "300px";
    menu.classList.add("open");
  }
}

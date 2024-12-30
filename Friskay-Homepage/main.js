const menuNavbar = document.querySelector("#menu-navbar");

document.body.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id == "menu-close" || target.id == "menu-open") {
    menuNavbar.classList.toggle("active");
  }
});

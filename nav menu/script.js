const menuItems = document.querySelectorAll("nav ul li a");

const handleClick = (e) =>  {
  menuItems.forEach(item => {
    item.classList.remove("active");
  });

  e.currentTarget.classList.add("active");
}

menuItems.forEach(item => {
  item.addEventListener("click", handleClick);
})
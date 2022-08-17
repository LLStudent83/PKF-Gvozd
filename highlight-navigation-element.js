function highlight_navigation_element() {
  const arr_nav_items = Array.from(
    document.querySelectorAll('.header__nav__item a')
  );
  for (let item of arr_nav_items) {
    item.addEventListener("click", (e)=> handler(e.target))
  }
}

function handler(element) {
  const nav_item_active = 
    document.querySelector('.header__nav__item-active');
  if (!nav_item_active) {
    element.classList.add("header__nav__item-active");
  } else {
    if (element !== nav_item_active) {
      nav_item_active.classList.remove("header__nav__item-active");
      element.classList.add("header__nav__item-active");
    }
  }
}

highlight_navigation_element();

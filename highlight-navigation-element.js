function highlight_navigation_element() {
  const arr_nav_items = Array.from(
    document.querySelectorAll('.header__nav__item a')
  );
  const url = document.location.href;

  for (let item of arr_nav_items) {
    if (url === item.href.slice(0, item.href.length - 1)) {
      //slice(0, item.href.length-1) убирает # на конце item.href
      item.classList.add('header__nav__item-active');
    }
  }
}

highlight_navigation_element();

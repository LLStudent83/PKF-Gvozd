function getBurgerMenu() {
  const burgerElement = document.getElementsByClassName(
    'header__nav__gamburger-container'
  )[0];
  document.body.addEventListener('click', (e) =>
    hendlerClick(e.target, burgerElement)
  );
}

function hendlerClick(elementWithEvent, burgerElement) {
  const headerNavListElement =
    document.getElementsByClassName('header__nav__list')[0];
  const header__nav__itemElements =
    document.getElementsByClassName('header__nav__item');
  const mainElement = document.querySelector('main');

  if (elementWithEvent === burgerElement) {
    for (let item of Array.from(header__nav__itemElements)) {
      item.classList.toggle('header__nav__item-visible');
    }

    mainElement.classList.toggle('main-longer');
  } else if (headerNavListElement) {
    mainElement.classList.remove('main-longer');

    for (let item of Array.from(header__nav__itemElements)) {
      item.classList.remove('header__nav__item-visible');
    }
  }
}

getBurgerMenu();

document.querySelector('.icon-menu').addEventListener('click', () => {
  document.querySelector('.icon-menu').classList.toggle('_active');
  document.querySelector('.header__menu').classList.toggle('_active');
  document.querySelector('body').classList.toggle('_lock');
});

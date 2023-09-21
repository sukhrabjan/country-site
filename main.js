const elDarkMode = document.querySelector(".header-button");

elDarkMode.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.body.style.transition = '1s';
});



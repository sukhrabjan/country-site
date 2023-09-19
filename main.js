const elDarkMode = document.querySelector(".header-button");
console.log(elDarkMode);

elDarkMode.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});



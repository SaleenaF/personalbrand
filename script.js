window.onload = function() {
  var themeButton = document.querySelector(".theme-button");
  
  themeButton.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark-theme");
    themeButton.innerText = themeButton.innerText ? "Dark Theme" : "Light Theme";
  });
};

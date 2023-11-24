window.onload = function() {
  const themebutton = document.querySelector('.theme-button');
  const bodyelement = document.querySelector('body');
  themebutton.addEventListener('click', function(event) {
    bodyelement.classList.toggle('dark-theme');
    if (themebutton.innerText === 'Dark Theme') {
      themebutton.innerText = 'Light Theme';
    } else {
      themebutton.innerText = 'Dark Theme';
    }
  });
};

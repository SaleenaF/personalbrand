document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('.theme-button');
  const body = document.querySelector('body');
  button.addEventListener('click', function () {
    const classList = body.classList;
    if (classList.contains('dark-theme')) {
      classList.remove('dark-theme');
      button.innerText = 'Light Theme';
    } else {
      classList.add('dark-theme');
      button.innerText = 'Dark Theme';
    }
  });
});

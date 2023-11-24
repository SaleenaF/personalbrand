document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('.theme-button');
  const body = document.querySelector('body');

  button.addEventListener('click', function () {
    const classList = body.classList;

    if (classList.contains('dark-theme') || classList.contains('light-theme')) {
      classList.remove(classList.contains('light-theme') ? 'light-theme' : 'dark-theme');
      button.innerText = classList.contains('light-theme') ? 'Dark Theme' : 'Light Theme';
    } else {
      classList.add('light-theme');
      button.innerText = 'Light Theme';
    }
  });
});

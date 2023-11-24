document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector('.theme-button');
  const body = document.querySelector('body');

  button.addEventListener('click', function () {
    const classList = body.classList;

    if (classList.contains('dark-theme')) {
        classList.remove('dark-theme');
        classList.add('light-theme');
        button.innerText = 'Light Theme';
    } else if (classList.contains('light-theme')) {
        classList.remove('light-theme');
        classList.add('dark-theme');
        button.innerText = 'Dark Theme';
    }
  });
});

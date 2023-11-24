function myFunction() {
  const text = document.querySelector('.text');
  text.innerHTML = 'Light Mode'
  
  const theme = document.querySelector('.theme');
  theme.classList.toggle('dark');
}

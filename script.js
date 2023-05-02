const btn = document.querySelector('.btn');
const fullDescription = document.querySelector('#full-description');

btn.addEventListener('click', () => {
  if (fullDescription.style.display === 'none') {
    fullDescription.style.display = 'block';
    btn.textContent = 'Read Less';
  } else {
    fullDescription.style.display = 'none';
    btn.textContent = 'Read More';
  }
});

  
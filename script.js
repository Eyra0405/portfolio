// script.js
let current = 0;
const items = document.querySelectorAll('.gallery-item');

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

document.querySelector('.prev-button').addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  showItem(current);
});

document.querySelector('.next-button').addEventListener('click', () => {
  current = (current + 1) % items.length;
  showItem(current);
});

// Mostrar el primero al cargar
showItem(current);

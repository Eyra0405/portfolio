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
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries, 
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

window.addEventListener('DOMContentLoaded', () => {
  // Selecciona todas las secciones que quieres que tengan el efecto fade-in
  const sections = document.querySelectorAll('section:not(#inicio):not(header)');

  // Aplica la clase 'fade-in' a esas secciones
  sections.forEach(section => {
    section.classList.add('fade-in');
  });

  // Añade la clase 'visible' después de un breve retraso para el fade-in
  setTimeout(() => {
    sections.forEach(section => {
      section.classList.add('visible');
    });
  }, 100); // El retraso puede ajustarse a tu preferencia
});

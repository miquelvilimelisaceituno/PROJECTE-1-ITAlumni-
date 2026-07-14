const clicksPerfiles = {
  "john-doe": 342,
  "sarah-johnson": 128,
  "michael-brown": 95,
  "emily-davis": 250,
  "james-lee": 60,
  "jane-smith": 100,
  "alice-johnson": 150,
  "david-brown": 40,
};

function ordenarPorPopularidad(contenedor) {
  const items = Array.from(contenedor.querySelectorAll('[data-filter-item]'));

  items.sort((a, b) => {
    const clicksA = clicksPerfiles[a.dataset.id] || 0;
    const clicksB = clicksPerfiles[b.dataset.id] || 0;
    return clicksB - clicksA;
  });

  items.forEach((item) => contenedor.appendChild(item));
}

document.querySelectorAll('[data-sort="popular"]').forEach((boton) => {
  boton.addEventListener('click', (evento) => {
    evento.preventDefault();
    document.querySelectorAll('[data-filter-list]').forEach(ordenarPorPopularidad);
    marcarActivo(boton);
  });
});

function marcarActivo(boton) {
  boton.parentElement.querySelectorAll('a').forEach((a) => a.classList.remove('is-active'));
  boton.classList.add('is-active');
}

function filtrarPorTexto(contenedor, texto) {
  const busqueda = texto.trim().toLowerCase();
  const items = contenedor.querySelectorAll('[data-filter-item]');

  items.forEach((item) => {
    const contenido = item.textContent.toLowerCase();
    const coincide = contenido.includes(busqueda);
    item.classList.toggle('is-hidden', !coincide);
  });
}

document.querySelectorAll('.search-bar__input').forEach((input) => {
  input.addEventListener('input', (evento) => {
    document.querySelectorAll('[data-filter-list]').forEach((contenedor) => {
      filtrarPorTexto(contenedor, evento.target.value);
    });
  });
});
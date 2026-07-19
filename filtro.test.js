import { describe, it, expect, beforeEach } from 'vitest';
import { ordenarPorPopularidad, filtrarPorTexto } from './filtro.js';

/**
 * Feature: Buscador de alumni en Networking
 * Scenario: Filtrar perfiles por coincidencia parcial
 *   Given estoy en la página de Networking
 *   When escribo "doe" en el buscador
 *   Then solo se muestran los perfiles cuyo contenido incluye "doe"
 *   And el resto de perfiles quedan ocultos
 */

describe('filtrarPorTexto', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-filter-list>
        <article data-filter-item data-id="john-doe">John Doe</article>
        <article data-filter-item data-id="sarah-johnson">Sarah Johnson</article>
      </div>
    `;
  });

  it('oculta los elementos que no coinciden con el texto', () => {
    const contenedor = document.querySelector('[data-filter-list]');
    filtrarPorTexto(contenedor, 'doe');

    const items = contenedor.querySelectorAll('[data-filter-item]');
    expect(items[0].classList.contains('is-hidden')).toBe(false);
    expect(items[1].classList.contains('is-hidden')).toBe(true);
  });
});

describe('ordenarPorPopularidad', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-filter-list>
        <article data-filter-item data-id="james-lee">James Lee</article>
        <article data-filter-item data-id="john-doe">John Doe</article>
      </div>
    `;
  });

  it('reordena de más a menos popular', () => {
    const contenedor = document.querySelector('[data-filter-list]');
    ordenarPorPopularidad(contenedor);

    const items = contenedor.querySelectorAll('[data-filter-item]');
    expect(items[0].dataset.id).toBe('john-doe');   // 342 clics, el test puede fallar si se cambian clics durante la demo 
    expect(items[1].dataset.id).toBe('james-lee');  // 60 clics
  });
});
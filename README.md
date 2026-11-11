# Pizzería Mamma Mia!

Hito 4 - Consumo de APIs con React | Desafío Latam - Fullstack JS

## Accesos

- **Demo (Vercel):** [pizzeria-mama-mia-hito4.vercel.app](https://pizzeria-mama-mia-hito4.vercel.app/)
- **Backend / API (Render):** [pizzeria-backend-laiv.onrender.com/api/pizzas](https://pizzeria-backend-laiv.onrender.com/api/pizzas)
- **Repositorio:** [cesarscl/Pizzeria-Mama-Mia-Hito4](https://github.com/cesarscl/Pizzeria-Mama-Mia-Hito4)

> El backend está en el plan gratuito de Render y podría estar inactivo al momento de la evaluación: la primera carga puede tardar cerca de un minuto.

## Hito 4: consumo de APIs

- [x] `Home.jsx` consume `GET /api/pizzas` con `useEffect` y `fetch` y renderiza las tarjetas.
- [x] `Pizza.jsx` consume `GET /api/pizzas/p001` con `useEffect` y `fetch`.
- [x] `Pizza.jsx` muestra nombre, precio, ingredientes, imagen y descripción.

> Al detalle de la pizza se llega con el botón **Ver Más** de cualquier tarjeta. El carrito se abre con el botón **🛒 Total** del Navbar.

## Hitos anteriores

| Hito | Contenido |
|---|---|
| 1 | Componentes y props: Navbar, Header, CardPizza y Footer |
| 2 | Formularios de Register y Login con validaciones (`useState`) |
| 3 | Menú con `.map()` y carrito con `+` / `-` y total |

## Estructura

```
src/
├── App.jsx         → Navbar + vista activa (estado `view`) + Footer
├── components/     → Navbar, Header, Home, CardPizza, Pizza, Register, Login, Message, Cart, Footer
├── utils/helpers.js → formatPrice, API_URL, handleImgError
└── pizzas.js       → imágenes de respaldo y pizzaCart
```

## Cómo correrlo en local

```bash
git clone https://github.com/cesarscl/Pizzeria-Mama-Mia-Hito4.git
cd Pizzeria-Mama-Mia-Hito4
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173). Por defecto usa el backend de Render; para usar el backend local del material de apoyo (`npm start`, puerto 5000), crea un archivo `.env.local` con `VITE_API_URL=http://localhost:5000`.

## Notas

- Las imágenes del material de apoyo (Firebase) responden error 402; si una falla, `onError` la reemplaza por una foto de [Unsplash](https://unsplash.com/) desde `pizzas.js`.
- La navegación entre vistas se hace con el estado `view` de `App.jsx` (aún sin React Router).
- El monto del botón Total del Navbar es fijo; el total real se muestra dentro del carrito.

## Tecnologías

React 19 · Vite · Bootstrap 5

## Autor

Cesar Ormeño — Desafío Latam, Fullstack JS, Módulo 04

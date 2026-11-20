# 🎬 Práctica 7 - App de Películas con React

Aplicación web desarrollada con **React** y **Vite** que consume la API de **The Movie Database (TMDB)** para mostrar un catálogo de películas y la información detallada de cada una.

---

## 👩‍💻 Integrante

Proyecto individual:

- **Victoria Angélica Galarza Pérez**

## 🏫 Datos académicos

| Dato | Información |
| --- | --- |
| **Profesor** | Zeus Emanuel Gutiérrez Cobian |
| **Materia** | Desarrollo de Aplicaciones Web |
| **Calendario** | 2026B |
| **Institución** | CUCEI – Universidad de Guadalajara |

---

## 🎯 Objetivo

Desarrollar una aplicación web de una sola página (SPA) con React que consuma una API externa, aplicando:

- Componentes reutilizables y paso de información mediante *props*.
- Manejo de estado y efectos con los hooks `useState` y `useEffect`.
- Navegación entre vistas con **React Router DOM**, incluyendo rutas con parámetros.
- Peticiones HTTP a una API REST y uso de variables de entorno para la clave de acceso.
- Diseño responsivo con CSS para que la aplicación se vea bien en computadora y en celular.
- Control de versiones con Git y GitHub, y despliegue en Netlify.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso en el proyecto |
| --- | --- |
| **React** | Biblioteca para construir la interfaz con componentes. |
| **Vite** | Herramienta de desarrollo y empaquetado del proyecto. |
| **React Router DOM** | Manejo de rutas y navegación entre páginas. |
| **CSS** | Estilos, tema visual y diseño responsivo con *media queries*. |
| **TMDB API** | Fuente de datos de las películas. |
| **Git** | Control de versiones. |
| **GitHub** | Repositorio remoto del proyecto. |
| **Netlify** | Despliegue de la aplicación en la web. |

---

## 📁 Estructura general del proyecto

```
practica7-react-peliculas/
├── docs/                      # Capturas de pantalla para este README
├── public/
│   ├── _redirects             # Regla de Netlify para que funcionen las rutas de React Router
│   └── favicon.svg            # Ícono de la pestaña del navegador
├── src/
│   ├── components/
│   │   ├── Footer.jsx         # Pie de página con el escudo de CUCEI y los datos de la práctica
│   │   ├── Footer.css         # Estilos del pie de página
│   │   ├── MovieCard.jsx      # Tarjeta de una película (póster y título) con enlace a su detalle
│   │   ├── MovieCard.css      # Estilos de la tarjeta y efecto hover
│   │   ├── MovieGrid.jsx      # Obtiene las películas de la API y las muestra en una cuadrícula
│   │   └── MovieGrid.css      # Cuadrícula responsiva de tarjetas
│   ├── img/
│   │   ├── escudo-cucei.svg   # Escudo de CUCEI usado en el footer
│   │   └── placeholder.svg    # Imagen que se muestra cuando una película no tiene póster
│   ├── pages/
│   │   ├── LandingPage.jsx    # Página principal: muestra la cuadrícula de películas
│   │   ├── MovieDetails.jsx   # Página de detalle de una película
│   │   └── MovieDetails.css   # Diseño en dos columnas del detalle
│   ├── routers/
│   │   └── AppRouter.jsx      # Definición de las rutas con BrowserRouter
│   ├── services/
│   │   └── httpClient.js      # Función get() para hacer peticiones a la API de TMDB
│   ├── utils/
│   │   └── getMovieImg.js     # Construye la URL del póster o devuelve el placeholder
│   ├── App.jsx                # Componente principal: header, rutas y footer
│   ├── App.css                # Estilos del header y del contenedor principal
│   ├── index.css              # Estilos globales y variables de color del tema
│   └── main.jsx               # Punto de entrada: monta la aplicación en el DOM
├── .env                       # Clave de la API (no se sube al repositorio)
├── index.html                 # HTML base y fuentes de Google Fonts
├── package.json               # Dependencias y scripts del proyecto
└── vite.config.js             # Configuración de Vite
```

---

## 🚀 Instalación y ejecución local

**Requisitos:** tener instalados [Node.js](https://nodejs.org/) y Git.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/victoriagalarza/practica7-react-peliculas.git
   cd practica7-react-peliculas
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto con la clave de la API de TMDB:

   ```env
   VITE_TMDB_API_KEY=713ee87ad76be7bb03916e96e245c9e5
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección que muestra la terminal (normalmente `http://localhost:5173`).

> Si se modifica el archivo `.env`, es necesario detener y volver a ejecutar `npm run dev` para que Vite lea el nuevo valor.

---

## 🧭 Rutas utilizadas

| Ruta | Componente | Descripción |
| --- | --- | --- |
| `/` | `LandingPage` | Página principal. Muestra la cuadrícula con las películas populares. |
| `/movies/:movieId` | `MovieDetails` | Muestra el detalle de la película cuyo ID viene en la URL (por ejemplo, `/movies/550`). |

Las rutas se definen en `src/routers/AppRouter.jsx` con `BrowserRouter`. El parámetro `movieId` se lee en `MovieDetails` con el hook `useParams`.

---

## 🌐 API utilizada

Se utiliza la API de **[The Movie Database (TMDB)](https://www.themoviedb.org/)**, versión 3.

**URL base:** `https://api.themoviedb.org/3`

| Endpoint | Uso |
| --- | --- |
| `/discover/movie` | Obtiene la lista de películas que se muestra en la página principal. |
| `/movie/{id}` | Obtiene la información de una película: título, póster, géneros y descripción. |

La función `get(path)` de `src/services/httpClient.js` agrega a cada petición:

- `api_key`, leída de la variable de entorno `VITE_TMDB_API_KEY`.
- `language=es-MX`, para recibir la información en español.

Si el `path` ya incluye un `?`, los parámetros se agregan con `&`. Si la respuesta no es exitosa (`response.ok` es falso), la función lanza un error.

### Imágenes

La API solo devuelve la ruta del póster (por ejemplo, `/abc123.jpg`). La URL completa se arma en `src/utils/getMovieImg.js`:

```
https://image.tmdb.org/t/p/w{ancho}{poster_path}
```

Por ejemplo, con un ancho de 500: `https://image.tmdb.org/t/p/w500/abc123.jpg`. Si la película no tiene póster, se muestra la imagen `placeholder.svg`.

---

## ⚙️ Funcionamiento

### Página principal

Al abrir la aplicación, el componente `MovieGrid` hace una petición a `/discover/movie` y muestra las películas en una cuadrícula de tarjetas. Cada tarjeta (`MovieCard`) tiene el póster y el título de la película. Al pasar el cursor, la tarjeta se eleva ligeramente, y al hacer clic lleva a la página de detalle. La cuadrícula se adapta al tamaño de la pantalla: muestra varias columnas en computadora y dos en celular.

![Página principal](docs/pagina-principal.png)

### Detalle de la película

La página de detalle lee el `movieId` de la URL y consulta `/movie/{id}`. Mientras llegan los datos se muestra el mensaje *"Cargando información..."*. Después se presenta el póster a la izquierda y, a la derecha, el título, los géneros y la descripción. Si la película no tiene descripción en español, aparece *"Sin descripción disponible"*. Un botón permite regresar a la página principal. En celular, el contenido se acomoda en una sola columna.

![Detalle de la película](docs/detalle-pelicula.png)

### Vista en celular

![Vista en celular](docs/vista-celular.png)

---

## 🔗 Links

- **Repositorio:** [https://github.com/victoriagalarza/practica7-react-peliculas](https://github.com/victoriagalarza/practica7-react-peliculas)
- **Netlify:** [https://app.netlify.com/projects/practica7-react-peliculas-yrjk/agent-runs/new](https://app.netlify.com/projects/practica7-react-peliculas-yrjk/agent-runs/new)

---

## 📝 Conclusiones

Esta práctica permitió aplicar los conceptos principales de React en un proyecto completo. Se trabajó con componentes reutilizables que reciben información por *props* y con los hooks `useState` y `useEffect` para guardar datos y hacer peticiones cuando un componente se monta o cuando cambia un parámetro.

Con React Router DOM se implementó la navegación entre la página principal y el detalle de cada película, usando una ruta con parámetro. Consumir la API de TMDB ayudó a entender cómo organizar las peticiones HTTP en un servicio aparte, cómo manejar los errores y la importancia de guardar la clave de acceso en una variable de entorno en lugar de escribirla directamente en el código.

Por último, se reforzó el uso de CSS para lograr un diseño consistente y responsivo, y se completó el flujo de trabajo de un proyecto real: control de versiones con Git, repositorio en GitHub y despliegue en Netlify, donde fue necesario agregar el archivo `_redirects` para que las rutas de React Router funcionen al recargar la página.

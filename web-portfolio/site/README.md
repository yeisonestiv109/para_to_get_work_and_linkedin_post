# Portafolio de Yeison Delgado — Guía rápida

Tu web es **estática** (HTML/CSS/JS plano). No necesita servidor, ni npm, ni build.
Funciona haciendo doble clic en `index.html`, y se puede subir tal cual a Vercel, Hostinger,
Netlify o GitHub Pages.

---

## 1. Ver la web en tu computador
Haz **doble clic en `index.html`**. Se abre en tu navegador. Listo.

## 2. Subirla a Vercel (gratis, sin dominio aún)
**Opción A — arrastrar (la más simple):**
1. Entra a https://vercel.com e inicia sesión (con GitHub o email).
2. Crea un proyecto nuevo → opción de subir carpeta / "deploy".
3. Arrastra **el contenido de esta carpeta `site/`** (no la carpeta de arriba).
4. Vercel te da una URL tipo `https://tu-proyecto.vercel.app`. Esa es tu web.

**Opción B — desde GitHub:** conecta el repo y, en "Root Directory", elige `web-portfolio/site`.

> En Vercel no hace falta tocar nada técnico. El archivo `.htaccess` es solo para Hostinger;
> en Vercel se ignora sin problema (puedes dejarlo).

## 3. Poner tu CV para descargar
1. Guarda tu CV en PDF dentro de `assets/cv/` con el nombre **`Yeison_Delgado_CV.pdf`**.
2. Si usas otro nombre, abre `lib/manifest.js` con el Bloc de notas y cambia la línea `cv: "..."`.


## 4. Editar tus datos (sin saber programar)
Abre **`lib/manifest.js`** con el Bloc de notas. Cambia solo lo que está entre comillas:
- `email`, `whatsapp` (sin + ni espacios), `linkedin`, `github`, `cv`, `year`.
Guarda el archivo y vuelve a subir. **No borres comillas, comas ni llaves.**

## 5. Editar textos, proyectos o el titular
Los textos están dentro de **`index.html`** (ábrelo con el Bloc de notas o VS Code).
- Cada texto tiene su versión en inglés en un atributo `data-en="..."`. Si cambias el texto en
  español, cambia también su `data-en` para que el botón ES/EN siga coincidiendo.
- Los proyectos están en la sección `<!-- WORK -->`. Puedes editar nombre, año y descripción.

## 6. Cambiar idioma
La web tiene un botón **ES / EN** arriba a la derecha. Cambia los textos al instante.

## 7. Si subes cambios y NO se actualizan
Es la caché del navegador. Dos soluciones:
1. Pulsa **Ctrl + F5** (refrescar fuerte).
2. En `index.html`, sube el número de versión: cambia `?v=20260630` por la fecha de hoy
   (ej. `?v=20260715`) en las líneas de `<link>` y `<script>`. Guarda y vuelve a subir.

---

## Estructura de archivos
```
site/
  index.html        ← la página (textos aquí)
  styles.css        ← estilos
  main.js           ← animaciones e interacciones
  lib/
    manifest.js     ← TUS DATOS editables (email, links, CV…)
    gsap.min.js
    ScrollTrigger.min.js
  assets/
    cv/             ← tu CV en PDF
    img/            ← imágenes (si añades)
  .htaccess         ← caché (solo Hostinger; Vercel lo ignora)
```

Hecho con cariño y criterio. Cualquier ajuste, lo vemos. 🚀

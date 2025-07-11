# 🚀 Astro International Starter

<p align="center">
  <img src="src/assets/astro.svg" alt="Astro Logo" width="100" />
</p>

<p align="center">
  <b>Starter multilenguaje (Español & Inglés) con <a href="https://astro.build/">Astro</a> + <a href="https://tailwindcss.com/">TailwindCSS v4</a> + TypeScript</b><br/>
  <a href="https://astro.build/"> <img src="https://img.shields.io/badge/Astro-v5.11.0-blueviolet?logo=astro" alt="Astro"/> </a>
  <a href="https://tailwindcss.com/"> <img src="https://img.shields.io/badge/TailwindCSS-v4.1.11-38bdf8?logo=tailwindcss" alt="TailwindCSS"/> </a>
  <img src="https://img.shields.io/badge/i18n-Soporte%20multi--idioma-yellow" alt="i18n"/>
</p>

---

## ✨ Características principales

- 🌐 Internacionalización lista para Español (`es`) e Inglés (`en`)
- ⚡️ Astro v5+, TypeScript y TailwindCSS v4
- 🗂️ Estructura de proyecto clara y fácil de extender
- 🔄 Redirección automática al idioma por defecto
- 🧩 Componentes reutilizables y helpers para traducción
- 🎨 Listo para personalizar y desplegar

---

## 📁 Estructura del Proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/           # Imágenes y recursos
│   ├── components/       # Componentes reutilizables
│   │   ├── LanguagePicker.astro  # Selector de idioma
│   │   ├── Nav.astro            # Navegación traducida
│   │   └── Welcome.astro        # (Demo)
│   ├── i18n/             # Lógica y diccionarios de traducción
│   │   ├── ui.ts         # Strings traducibles y configuración de idiomas
│   │   └── utils.ts      # Helpers para traducción y detección de idioma
│   ├── layouts/          # Layouts base
│   │   └── Base.astro    # Layout principal con <html lang={lang}>
│   └── pages/            # Páginas por idioma
│       ├── en/
│       │   └── index.astro
│       ├── es/
│       │   └── index.astro
│       └── index.astro   # Redirección automática al idioma por defecto
├── package.json
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🌍 Internacionalización (i18n)

- **Idiomas soportados:** Español (`es`) e Inglés (`en`).
- **Redirección automática:** Al acceder a `/`, redirige a `/es/` (puedes cambiar el idioma por defecto en `src/i18n/ui.ts`).
- **Traducción de UI:** Usa helpers para traducir textos y rutas en componentes y páginas.
- **Selector de idioma:** Incluido en el footer de todas las páginas.
- **Fácil de extender:** Solo crea nuevas páginas en `src/pages/en/` o `src/pages/es/` y usa los helpers de traducción.

---

## 🏁 Primeros pasos

1. **Instala dependencias:**
   ```sh
   pnpm install
   # o npm install
   ```
2. **Inicia el servidor de desarrollo:**
   ```sh
   pnpm dev
   # o npm run dev
   ```
3. **Abre** [`http://localhost:4321`](http://localhost:4321) y prueba el cambio de idioma.

---

## 🛠️ Personaliza tu pagina

- Agrega más páginas en `src/pages/en/` y `src/pages/es/`.
- Añade más claves de traducción en `src/i18n/ui.ts`.
- Personaliza el layout y los componentes a tu gusto.
- Cambia el idioma por defecto en `src/i18n/ui.ts`.
- Integra tus propios estilos y assets en `src/assets/` y `src/styles/`.

---

## 📚 Recursos útiles

- [Documentación oficial de Astro](https://docs.astro.build/es/)
- [TailwindCSS](https://tailwindcss.com/)
- [Receta oficial de i18n en Astro](https://docs.astro.build/en/guides/integrations-guide/i18n/)

---

## 🙌 Créditos

> Basado en la receta oficial de internacionalización de Astro v4+. ¡Listo para clonar y usar como base para tu pagina multilenguaje!

<p align="center">
  <b>Hecho con ❤️. ¡Espero les funcione!</b>
</p>

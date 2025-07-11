export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'es';

export const showDefaultLang = true; // Cambia a false si no quieres /es/ en la URL

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.twitter': 'Twitter',
    'hero.title': 'Start your Astro project from scratch!',
    'hero.desc': 'Modern starter with Astro, TailwindCSS 4 and ready-to-use internationalization. Perfect for portfolios and multilingual sites!',
    'hero.button': 'View repository on GitHub',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.twitter': 'Twitter',
    'hero.title': '¡Comienza tu proyecto Astro desde cero!',
    'hero.desc': 'Starter moderno con Astro, TailwindCSS 4 e internacionalización lista para usar. ¡Ideal para portafolios y sitios multilenguaje!',
    'hero.button': 'Ver repositorio en GitHub',
  },
} as const; 
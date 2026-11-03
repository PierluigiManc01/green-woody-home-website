import { useLocation, useNavigate } from 'react-router-dom';
import { type Language, useLanguage } from '@/contexts/LanguageContext';

// Italian is the default language and lives at the root; English lives under /en.
export const PAGE_PATHS = {
  home: { it: '/', en: '/en' },
  gallery: { it: '/galleria', en: '/en/gallery' },
  services: { it: '/servizi', en: '/en/services' },
  events: { it: '/eventi', en: '/en/events' },
  reservations: { it: '/prenotazioni', en: '/en/reservations' },
} satisfies Record<string, Record<Language, string>>;

export type PageKey = keyof typeof PAGE_PATHS;

const normalize = (pathname: string) => (pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname);

export const languageFromPath = (pathname: string): Language => {
  const path = normalize(pathname);
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'it';
};

export const pageFromPath = (pathname: string): PageKey | undefined => {
  const path = normalize(pathname);
  return (Object.keys(PAGE_PATHS) as PageKey[]).find((key) => PAGE_PATHS[key].it === path || PAGE_PATHS[key].en === path);
};

// Path of a page in the language currently shown.
export const useLocalizedPath = () => {
  const { language } = useLanguage();
  return (page: PageKey) => PAGE_PATHS[page][language];
};

// Switching language moves to the same page in the other language, so every language has its own URL.
export const useSwitchLanguage = () => {
  const { setLanguage } = useLanguage();
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  return (next: Language) => {
    const page = pageFromPath(pathname);
    if (page) navigate(PAGE_PATHS[page][next] + hash);
    else setLanguage(next);
  };
};

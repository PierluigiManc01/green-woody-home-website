import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { PAGE_PATHS, type PageKey, languageFromPath } from "@/lib/routes";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Keeps the shown language in step with the URL, e.g. after browser back/forward.
const LanguageFromUrl = () => {
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();
  const urlLanguage = languageFromPath(pathname);

  useEffect(() => {
    if (language !== urlLanguage) setLanguage(urlLanguage);
  }, [language, urlLanguage, setLanguage]);

  return null;
};

const Layout = () => {
  // Each URL renders in its own language at build time, so the pre-rendered HTML matches it.
  const { pathname } = useLocation();
  const initialLanguage = languageFromPath(pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider initialLanguage={initialLanguage}>
        <LanguageFromUrl />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Outlet />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

const PAGES: Record<PageKey, { element: JSX.Element; entry: string }> = {
  home: { element: <Index />, entry: "src/pages/Index.tsx" },
  gallery: { element: <Gallery />, entry: "src/pages/Gallery.tsx" },
  services: { element: <Services />, entry: "src/pages/Services.tsx" },
  events: { element: <Events />, entry: "src/pages/Events.tsx" },
  reservations: { element: <Contact />, entry: "src/pages/Contact.tsx" },
};

// Every page except the Italian home (the index route) gets one route per language.
const localizedRoutes: RouteRecord[] = (Object.keys(PAGES) as PageKey[]).flatMap((key) =>
  Object.values(PAGE_PATHS[key])
    .filter((path) => path !== "/")
    .map((path) => ({ path: path.slice(1), ...PAGES[key] })),
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index />, entry: "src/pages/Index.tsx" },
      ...localizedRoutes,
      // Rendered to 404.html, which Vercel serves for unknown URLs.
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

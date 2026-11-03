import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { EVENTS_PATH, LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = () => {
  // Italian URLs render in Italian at build time, so their pre-rendered HTML is Italian too.
  const { pathname } = useLocation();
  const initialLanguage = pathname.startsWith(EVENTS_PATH.it) ? 'it' : 'en';

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider initialLanguage={initialLanguage}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Outlet />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index />, entry: "src/pages/Index.tsx" },
      { path: "gallery", element: <Gallery />, entry: "src/pages/Gallery.tsx" },
      { path: "services", element: <Services />, entry: "src/pages/Services.tsx" },
      { path: "events", element: <Events />, entry: "src/pages/Events.tsx" },
      { path: "eventi", element: <Events />, entry: "src/pages/Events.tsx" },
      { path: "contact", element: <Contact />, entry: "src/pages/Contact.tsx" },
      { path: "reservations", element: <Contact />, entry: "src/pages/Contact.tsx" },
      // Rendered to 404.html, which Vercel serves for unknown URLs.
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index />, entry: "src/pages/Index.tsx" },
      { path: "gallery", element: <Gallery />, entry: "src/pages/Gallery.tsx" },
      { path: "services", element: <Services />, entry: "src/pages/Services.tsx" },
      { path: "contact", element: <Contact />, entry: "src/pages/Contact.tsx" },
      { path: "reservations", element: <Contact />, entry: "src/pages/Contact.tsx" },
      // Rendered to 404.html, which Vercel serves for unknown URLs.
      { path: "404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

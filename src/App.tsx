import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index.tsx";
import Support from "./pages/Support.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import AccountDeletion from "./pages/AccountDeletion.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/support" element={<Support lang="en" />} />
          <Route path="/es/support" element={<Support lang="es" />} />
          <Route path="/privacy" element={<Privacy lang="en" />} />
          <Route path="/es/privacy" element={<Privacy lang="es" />} />
          <Route path="/terms" element={<Terms lang="en" />} />
          <Route path="/es/terms" element={<Terms lang="es" />} />
          <Route path="/account-deletion" element={<AccountDeletion lang="en" />} />
          <Route path="/es/account-deletion" element={<AccountDeletion lang="es" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Support from "@/pages/Support";
import AccountDeletion from "@/pages/AccountDeletion";

// Mock framer-motion to avoid animation ticks in test environment
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: { children?: React.ReactNode }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: { children?: React.ReactNode }) => <button {...props}>{children}</button>,
    section: ({ children, ...props }: { children?: React.ReactNode }) => <section {...props}>{children}</section>,
  },
  AnimatePresence: ({ children }: { children?: React.ReactNode }) => children,
}));

// Mock useSEO hook to prevent errors modifying document elements during testing
vi.mock("@/hooks/useSEO", () => ({
  useSEO: () => {},
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <QueryClientProviderWrapper>
      <LanguageProvider>
        <MemoryRouter>
          {ui}
        </MemoryRouter>
      </LanguageProvider>
    </QueryClientProviderWrapper>
  );
};

// Simple wrapper since App uses QueryClient
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const QueryClientProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("Legal Pages Rendering Tests", () => {
  describe("Privacy Page", () => {
    it("renders in English with required sections", () => {
      renderWithProviders(<Privacy lang="en" />);
      expect(screen.getByRole("heading", { level: 1, name: "Privacy Policy" })).toBeInTheDocument();
      expect(screen.getAllByText(/Google Firebase/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Google Gemini/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/RevenueCat/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Resend/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Unsplash/).length).toBeGreaterThan(0);
    });

    it("renders in Spanish with required sections", () => {
      renderWithProviders(<Privacy lang="es" />);
      expect(screen.getByRole("heading", { level: 1, name: "Política de Privacidad" })).toBeInTheDocument();
      expect(screen.getAllByText(/Google Firebase/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Google Gemini/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/RevenueCat/).length).toBeGreaterThan(0);
    });
  });

  describe("Terms Page", () => {
    it("renders in English and details subscriptions", () => {
      renderWithProviders(<Terms lang="en" />);
      expect(screen.getByRole("heading", { level: 1, name: "Terms of Use" })).toBeInTheDocument();
      expect(screen.getByText(/ReciList Plus Subscriptions/)).toBeInTheDocument();
      expect(screen.getByText(/Nutrition Disclaimer/)).toBeInTheDocument();
      expect(screen.getByText(/Allergies and Food Safety/)).toBeInTheDocument();
    });

    it("renders in Spanish and details subscriptions", () => {
      renderWithProviders(<Terms lang="es" />);
      expect(screen.getByRole("heading", { level: 1, name: "Términos de Uso" })).toBeInTheDocument();
      expect(screen.getByText(/Suscripciones ReciList Plus/)).toBeInTheDocument();
      expect(screen.getByText(/Descargo de Responsabilidad Nutricional/)).toBeInTheDocument();
    });
  });

  describe("Support Page", () => {
    it("renders Restore Purchases instructions in English", () => {
      renderWithProviders(<Support lang="en" />);
      expect(screen.getByRole("heading", { level: 1, name: "Customer Support" })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 2, name: "Restore Plus Subscription Purchases" })).toBeInTheDocument();
      expect(screen.getByText(/Tap the "Restore Purchases" or "Restaurar compras" button/)).toBeInTheDocument();
      expect(screen.getByText("support@recilist.app")).toBeInTheDocument();
    });

    it("renders Restore Purchases instructions in Spanish", () => {
      renderWithProviders(<Support lang="es" />);
      expect(screen.getByRole("heading", { level: 1, name: "Soporte al Cliente" })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 2, name: "Restaurar Compras de Suscripción Plus" })).toBeInTheDocument();
      expect(screen.getByText(/Tocá el botón “Restaurar compras” o “Restore Purchases”/)).toBeInTheDocument();
      expect(screen.getByText("support@recilist.app")).toBeInTheDocument();
    });
  });

  describe("Account Deletion Page", () => {
    it("renders deletion steps in English", () => {
      renderWithProviders(<AccountDeletion lang="en" />);
      expect(screen.getByRole("heading", { level: 1, name: "Delete Account & Data" })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 2, name: /Option 1: Delete Instantly In-App/i })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 2, name: /Option 2: Request Deletion via Support/i })).toBeInTheDocument();
    });

    it("renders deletion steps in Spanish", () => {
      renderWithProviders(<AccountDeletion lang="es" />);
      expect(screen.getByRole("heading", { level: 1, name: "Eliminar Cuenta y Datos" })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 2, name: /Opción 1: Eliminar al instante desde la App/ })).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 2, name: /Opción 2: Solicitar eliminación por correo electrónico/ })).toBeInTheDocument();
    });
  });
});

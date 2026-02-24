import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gold border-opacity-20">
      <nav className="container-max flex items-center justify-between py-4 lg:py-5">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff08421acbecb4cd6a58047943337dae1%2F4a781836998f452aa0bee182a037d61f?format=webp&width=300&height=300"
            alt="Accounttech Solutions Logo"
            className="h-10 md:h-12 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-primary hover:text-gold transition-colors"
          >
            Nosotros
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-primary hover:text-gold transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("cases")}
            className="text-sm font-medium text-primary hover:text-gold transition-colors"
          >
            Casos de Éxito
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-primary hover:text-gold transition-colors"
          >
            Contacto
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollToSection("contact")}
            className="premium-button-secondary text-sm"
          >
            Cotización
          </button>
          <a
            href="https://api.whatsapp.com/send/?phone=5213318200036&amp;text=Hola,%20me%20interesan%20sus%20servicios;%20vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.&amp;type=phone_number&amp;app_absent=0?text=Hola%20ACCOUNTTECH%20SOLUTIONS"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button-primary text-sm"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gold border-opacity-20 bg-white">
          <div className="container-max py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm font-medium text-primary hover:text-gold transition-colors py-2"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-sm font-medium text-primary hover:text-gold transition-colors py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("cases")}
              className="text-left text-sm font-medium text-primary hover:text-gold transition-colors py-2"
            >
              Casos de Éxito
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm font-medium text-primary hover:text-gold transition-colors py-2"
            >
              Contacto
            </button>
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="premium-button-secondary text-sm w-full text-center"
              >
                Cotización
              </button>
              <a
                href="https://api.whatsapp.com/send/?phone=5213318200036&amp;text=Hola,%20me%20interesan%20sus%20servicios;%20vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.&amp;type=phone_number&amp;app_absent=0?text=Hola%20ACCOUNTTECH%20SOLUTIONS"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button-primary text-sm w-full text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

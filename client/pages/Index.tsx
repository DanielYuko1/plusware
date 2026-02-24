import Header from "@/components/Header";
import {
  Shield,
  CheckCircle,
  BarChart3,
  Users,
  Briefcase,
  FileText,
  MessageCircle,
  ArrowRight,
  DollarSign,
  Calculator,
  Inbox,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    privacyAccepted: false,
  });

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      alert("Por favor acepta el aviso de privacidad");
      return;
    }
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      message: "",
      privacyAccepted: false,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/6457516/pexels-photo-6457516.jpeg')",
          }}
        ></div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black via-60% to-secondary opacity-90"></div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-3 rounded-full blur-3xl -ml-48 -mb-48"></div>
        </div>

        <div className="container-max relative z-10 py-12 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo Large */}
            <div className="mb-8 md:mb-12 flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff08421acbecb4cd6a58047943337dae1%2F4a781836998f452aa0bee182a037d61f?format=webp&width=500&height=500"
                alt="Accounttech Solutions Logo"
                className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Protegemos y fortalecemos{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-light">
                la estructura financiera
              </span>{" "}
              de tu empresa
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Servicios contables, fiscales, financieros, nómina y recursos humanos con
              respaldo tecnológico y cumplimiento normativo.
            </p>

            {/* Gold line divider */}
            <div className="flex justify-center mb-8">
              <div className="gold-divider"></div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="premium-button-secondary text-base px-8 py-4 w-full sm:w-auto"
              >
                Solicitar Cotización
              </button>
              <a
                href="https://api.whatsapp.com/send/?phone=5213318200036&amp;text=Hola,%20me%20interesan%20sus%20servicios;%20vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.&amp;type=phone_number&amp;app_absent=0?text=Hola%20ACCOUNTTECH%20SOLUTIONS%2C%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button-primary text-base px-8 py-4 w-full sm:w-auto"
              >
                Hablar por WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-white border-opacity-10">
              <p className="text-sm text-gold mb-6 font-semibold">
                CONFIADO POR EMPRESAS EN MÉXICO
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white">
                <div className="text-center">
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm text-gray-400">Empresas asesoradas</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white bg-opacity-20"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm text-gray-400">Años de experiencia</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-white bg-opacity-20"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold">99%</p>
                  <p className="text-sm text-gray-400">Satisfacción de clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-white border-t-8 border-gold">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="mb-6">
                <div className="gold-divider mb-6"></div>
                <h2 className="text-primary mb-4">¿Quiénes Somos?</h2>
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                ACCOUNTTECH SOLUTIONS es una firma especializada en servicios
                financiero-fiscales que combine profesionalismo con tecnología
                avanzada para transformar la administración empresarial.
              </p>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Nuestra filosofía se fundamenta en tres pilares: <span className="text-gold font-semibold">protección</span> contra riesgos
                fiscales, <span className="text-gold font-semibold">estrategia</span> para optimizar recursos, y{" "}
                <span className="text-gold font-semibold">legalidad</span> en todos nuestros procesos.
              </p>

              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Con más de 15 años acompañando empresas en su crecimiento,
                entendemos que cada negocio tiene necesidades únicas. Por eso
                ofrecemos soluciones personalizadas que garantizan cumplimiento
                normativo, eficiencia operativa y crecimiento estructurado.
              </p>

              <div className="space-y-4">
                {[
                  "Control financiero total y transparente",
                  "Cumplimiento garantizado ante autoridades",
                  "Asesoría estratégica personalizada",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5256688/pexels-photo-5256688.jpeg"
                alt="Equipo de profesionales jóvenes en reunión"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20"></div>
              {/* Decorative gold line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="gold-divider mx-auto mb-6"></div>
              <h2 className="text-primary">Nuestros Servicios</h2>
            </div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Soluciones integrales diseñadas para fortalecer la estructura
              administrativo-fiscal de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Gestión de Nómina",
                description:
                  "Administración completa de nómina con cumplimiento IMSS, INFONAVIT y SAT",
                icon: DollarSign,
              },
              {
                title: "Consultoría Fiscal",
                description:
                  "Optimización fiscal y planeación estratégica conforme a normativa vigente",
                icon: Calculator,
              },
              {
                title: "Recursos Humanos",
                description:
                  "Reclutamiento, selección y administración integral de talento",
                icon: Users,
              },
              {
                title: "Back Office",
                description:
                  "Administración de procesos contables y operacionales tercerizado",
                icon: Inbox,
              },
              {
                title: "Servicios Contables",
                description:
                  "Contabilidad integral con auditoría interna y reportes precisos",
                icon: Shield,
              },
            ].map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-all">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-primary font-bold mb-3 text-sm">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional benefits */}
          <div className="mt-16 bg-white rounded-xl p-8 border-l-4 border-gold">
            <h3 className="text-primary mb-6">Garantías en cada servicio</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cumplimiento SAT, IMSS, INFONAVIT",
                  desc: "Protección total ante autoridades fiscales",
                },
                {
                  title: "Prevención de Riesgos",
                  desc: "Identificación y mitigación proactiva",
                },
                {
                  title: "Optimización Administrativa",
                  desc: "Procesos eficientes y controlados",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary mb-1">
                      {item.title}
                    </p>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="cases" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="gold-divider mx-auto mb-6"></div>
              <h2 className="text-primary">Casos de Éxito</h2>
            </div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Empresas que optimizaron costos y mejoraron su cumplimiento
              normativo con nuestro apoyo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                sector: "Sector Comercial",
                challenge:
                  "Empresa con múltiples sucursales enfrentaba inconsistencias fiscales",
                result: "Reducción de 30% en costos operativos y cumplimiento 100% con autoridades",
                metrics: "↓ 30% costos | ↑ 100% cumplimiento",
              },
              {
                sector: "Servicios Especializados",
                challenge:
                  "PYME en expansión sin estructura administrativa clara",
                result:
                  "Implementación de procesos escalables y profesionalización del back office",
                metrics: "↑ 3x crecimiento | ↓ 50% errores",
              },
              {
                sector: "PYME en Crecimiento",
                challenge:
                  "Falta de visión fiscal estratégica limitaba expansión",
                result:
                  "Planeación fiscal optimizada y apertura de nuevas líneas de negocio",
                metrics: "↑ 45% ingresos | ↑ 2 nuevas líneas",
              },
            ].map((caseStudy, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white shadow-lg hover:shadow-xl transition-shadow group"
              >
                <p className="text-gold font-bold text-sm mb-3 uppercase tracking-wider">
                  {caseStudy.sector}
                </p>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">
                  {caseStudy.challenge}
                </h3>
                <div className="bg-white bg-opacity-10 rounded p-4 mb-4">
                  <p className="text-sm text-gold mb-3">Resultado:</p>
                  <p className="text-white">{caseStudy.result}</p>
                </div>
                <p className="text-gold font-semibold text-sm">
                  {caseStudy.metrics}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="gold-divider mx-auto mb-6"></div>
              <h2 className="text-primary">
                ¿Por qué elegirnos?
              </h2>
            </div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Beneficios diferenciales que establecen nuestra propuesta de valor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Protección ante Riesgos Fiscales",
                icon: Shield,
                desc: "Anticipación y prevención de conflictos con autoridades",
              },
              {
                title: "Estructura Administrativa Sólida",
                icon: Briefcase,
                desc: "Procesos documentados, claros y escalables",
              },
              {
                title: "Planeación Estratégica Legal",
                icon: BarChart3,
                desc: "Decisiones fundamentadas en cumplimiento normativo",
              },
              {
                title: "Atención Personalizada",
                icon: Users,
                desc: "Equipo dedicado que entiende tu industria",
              },
              {
                title: "Digitalización y Control",
                icon: Shield,
                desc: "Plataformas inteligentes para monitoreo en tiempo real",
              },
              {
                title: "Soporte Integral",
                icon: MessageCircle,
                desc: "Respuesta rápida a cualquier contingencia o consulta",
              },
            ].map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-primary font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-primary via-secondary to-primary overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container-max text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Conversa con nuestros especialistas
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Fortalece tu empresa hoy mismo con asesoría de expertos en
            contabilidad, fiscalidad y recursos humanos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="premium-button-secondary text-base px-8 py-4 w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              Solicitar Cotización <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://api.whatsapp.com/send/?phone=5213318200036&amp;text=Hola,%20me%20interesan%20sus%20servicios;%20vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.&amp;type=phone_number&amp;app_absent=0?text=Hola%20ACCOUNTTECH%20SOLUTIONS%2C%20me%20interesa%20una%20asesoría"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button-primary text-base px-8 py-4 w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              Agendar Asesoría <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-max max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="gold-divider mx-auto mb-6"></div>
              <h2 className="text-primary">Contacto</h2>
            </div>
            <p className="text-gray-700 text-lg">
              Completa el formulario y nos pondremos en contacto en las próximas
              24 horas
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gold border-opacity-20 rounded-lg p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                  placeholder="+52 1234567890"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">
                Servicio requerido *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
              >
                <option value="">Selecciona un servicio...</option>
                <option value="nomina">Gestión de Nómina</option>
                <option value="fiscal">Consultoría Fiscal</option>
                <option value="rh">Recursos Humanos</option>
                <option value="backoffice">Back Office</option>
                <option value="contable">Servicios Contables</option>
                <option value="otros">Otros servicios</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-primary mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                placeholder="Cuéntanos sobre tus necesidades específicas..."
              ></textarea>
            </div>

            {/* Privacy notice */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="text-xs text-gray-600 mb-4">
                <span className="font-semibold">Aviso de Privacidad:</span> Los
                datos personales proporcionados son tratados conforme a la Ley
                Federal de Protección de Datos Personales en Posesión de los
                Particulares. Tu información será utilizada únicamente para
                contactarte respecto a tu consulta y no será compartida con
                terceros.
              </p>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={handleFormChange}
                  required
                  className="mt-1 w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
                />
                <span className="text-xs text-gray-700">
                  Acepto el aviso de privacidad y autorizo el tratamiento de
                  mis datos personales *
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="premium-button-secondary text-base w-full text-center py-4 font-semibold"
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="container-max section-padding">
          {/* Legal sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white border-opacity-10">
            <div>
              <h4 className="font-bold mb-4 text-gold">Privacidad</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Tus datos personales son protegidos conforme a la legislación
                mexicana. No compartimos información con terceros sin
                autorización.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gold">Cumplimiento Legal</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                ACCOUNTTECH SOLUTIONS cumple con las disposiciones fiscales y
                normativas vigentes en México, garantizando confidencialidad y
                profesionalismo.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gold">Datos de Contacto</h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p>
                  📞{" "}
                  <a href="tel:+5213318200036" className="hover:text-gold">
                    +52 (33) 1820-0036
                  </a>
                </p>
                <p>
                  ✉️{" "}
                  <a
                    href="mailto:contacto@accounttech.mx"
                    className="hover:text-gold"
                  >
                    contacto@accounttech.mx
                  </a>
                </p>
                <p>📍 Guadalajara, México</p>
                <p>📍 Durango, México</p>
              </div>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff08421acbecb4cd6a58047943337dae1%2F4a781836998f452aa0bee182a037d61f?format=webp&width=250&height=250"
                alt="Accounttech Solutions Logo"
                className="h-12 md:h-14 w-auto"
              />
              <p className="text-xs">S.A. de C.V. 2026 Todos los derechos reservados</p>
            </div>

            <div className="flex gap-6 flex-wrap justify-center md:justify-end">
              <a href="https://www.linkedin.com/company/accounttech-solution" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                WhatsApp
              </a>
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Política de Privacidad
              </Link>
              <a href="#" className="hover:text-gold transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

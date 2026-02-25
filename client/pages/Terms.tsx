import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function Terms() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Back Button & Title Section */}
      <section className="relative bg-gradient-to-b from-primary to-secondary py-12 lg:py-16">
        <div className="container-max relative z-10">
          <button
            onClick={goToHome}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a inicio
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-gold text-lg">
            ACCOUNTTECH SOLUTIONS S.A. DE C.V.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          {/* Intro */}
          <div className="mb-12 pb-8 border-b border-gold border-opacity-30">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Estos Términos y Condiciones rigen la relación entre ACCOUNTTECH SOLUTIONS S.A. DE C.V. (en lo sucesivo "la Empresa", "nosotros" o "nuestros") y los clientes, prospectos y usuarios (en lo sucesivo "Cliente" o "usted") que utilicen nuestros servicios.
            </p>
            <p className="text-gray-700 font-semibold text-lg">
              Al contratar nuestros servicios, usted acepta íntegramente estos Términos y Condiciones.
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-10 text-gray-700 leading-relaxed">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                I. Naturaleza de los Servicios
              </h2>
              <p className="mb-4">
                ACCOUNTTECH SOLUTIONS proporciona servicios especializados en:
              </p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  "Contabilidad e impuestos",
                  "Gestión de nómina",
                  "Recursos humanos",
                  "Asesoría fiscal",
                  "Back office administrativo",
                  "Consultoría empresarial",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic">
                Los servicios específicos se detallarán en el contrato individual entre ambas partes.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                II. Responsabilidades del Cliente
              </h2>
              <p className="mb-6">El Cliente se compromete a:</p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  "Proporcionar información veraz, completa y actualizada",
                  "Entregar documentación requerida en tiempo y forma",
                  "Notificar cambios relevantes que afecten los servicios",
                  "Cumplir con disposiciones fiscales y laborales vigentes",
                  "Pagar puntualmente los honorarios acordados",
                  "Mantener confidencialidad de la relación comercial",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                III. Responsabilidades de ACCOUNTTECH
              </h2>
              <p className="mb-6">La Empresa se compromete a:</p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold mb-6">
                {[
                  "Prestar servicios profesionales y diligentes",
                  "Cumplir con normativas fiscales y laborales aplicables",
                  "Mantener confidencialidad de información",
                  "Entregar reportes y documentos en tiempos acordados",
                  "Usar prácticas estándar de seguridad de información",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-gray-600 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                <strong>Limitación de responsabilidad:</strong> ACCOUNTTECH no es responsable por actos u omisiones del Cliente, cambios en la legislación posterior a la ejecución de servicios, o información incorrecta proporcionada por el Cliente.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                IV. Honorarios y Forma de Pago
              </h2>
              <p className="mb-4">
                Los honorarios se detallarán en el contrato o propuesta comercial.
              </p>
              <div className="bg-gray-50 border-l-4 border-gold p-6 rounded space-y-3 mb-4">
                <p className="text-sm">
                  <span className="font-semibold text-primary">Forma de pago:</span> Conforme a lo acordado en el contrato
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-primary">Facturación:</span> Se expide al vencimiento del período de servicios
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-primary">Mora:</span> El pago tardío incurrirá en intereses conforme a la ley
                </p>
              </div>
              <p className="text-sm italic text-gray-600">
                ACCOUNTTECH puede suspender servicios si los pagos se atrasan más de 30 días.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                V. Confidencialidad
              </h2>
              <p className="mb-4">
                Ambas partes se comprometen a mantener confidencial toda información compartida, excepto:
              </p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  "Información requerida por autoridades competentes",
                  "Información pública o de dominio común",
                  "Información ya conocida legítimamente",
                  "Información divulgada con consentimiento previo",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                VI. Uso de Información
              </h2>
              <p className="mb-4">
                ACCOUNTTECH utiliza información del Cliente únicamente para:
              </p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold mb-4">
                {[
                  "Prestación de servicios contratados",
                  "Cumplimiento de obligaciones fiscales y legales",
                  "Mejora continua de servicios",
                  "Comunicaciones sobre servicios",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-gray-600">
                Consultar Aviso de Privacidad para más detalles sobre protección de datos.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                VII. Duración y Terminación
              </h2>
              <p className="mb-4">
                Los servicios se prestarán conforme a lo estipulado en el contrato individual.
              </p>
              <div className="bg-gray-50 border-l-4 border-gold p-6 rounded space-y-3">
                <p className="text-sm">
                  <span className="font-semibold text-primary">Terminación:</span> Cualquier parte puede terminar los servicios con notificación por escrito con 15 días de anticipación
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-primary">Entrega de documentos:</span> Al término, se entregarán todos los documentos y información del Cliente en su poder
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-primary">Pagos pendientes:</span> El Cliente debe liquidar cualquier honorario pendiente
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                VIII. Modificaciones a los Términos
              </h2>
              <p className="mb-4">
                ACCOUNTTECH puede modificar estos Términos en cualquier momento. Los cambios serán notificados al Cliente con anticipación. Continuar usando nuestros servicios implica aceptación de las modificaciones.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                IX. Ley Aplicable y Jurisdicción
              </h2>
              <p className="mb-4">
                Estos Términos y Condiciones se rigen por las leyes aplicables en la República Mexicana, especialmente:
              </p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold mb-4">
                {[
                  "Código Fiscal de la Federación",
                  "Ley Federal del Trabajo",
                  "Código Civil Federal",
                  "Ley de Protección de Datos Personales",
                ].map((item, idx) => (
                  <li key={idx} className="text-sm">{item}</li>
                ))}
              </ul>
              <p className="text-sm italic text-gray-600">
                Ambas partes se someten a la jurisdicción de los tribunales competentes en Durango y Jalisco, México.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                X. Contacto
              </h2>
              <div className="bg-gray-50 border-l-4 border-gold p-6 rounded space-y-3">
                <p className="text-sm">
                  <span className="font-semibold text-primary">Para consultas:</span><br />
                  Email: contacto@accounttech.mx<br />
                  Teléfono: +52 (33) 1820-0036
                </p>
              </div>
            </div>

            {/* Last Update */}
            <div className="text-center border-t border-gold border-opacity-30 pt-8">
              <h3 className="text-xl font-bold text-primary mb-2">
                Última Actualización
              </h3>
              <p className="text-gold font-bold text-lg">Enero 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="container-max section-padding">
          {/* Bottom footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 border-t border-white border-opacity-10 pt-8">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff08421acbecb4cd6a58047943337dae1%2F4a781836998f452aa0bee182a037d61f?format=webp&width=200&height=200"
                alt="Accounttech Solutions Logo"
                className="h-10 md:h-12 w-auto"
              />
              <p className="text-xs">
                S.A. de C.V. 2026 Todos los derechos reservados
              </p>
            </div>

            <div className="flex gap-6">
              <button
                onClick={goToHome}
                className="hover:text-gold transition-colors cursor-pointer"
              >
                Inicio
              </button>
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

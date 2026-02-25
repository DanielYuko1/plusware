import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
    // Wait for navigation then scroll to hero
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
            Aviso de Privacidad Integral
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
              En ACCOUNTTECH SOLUTIONS S.A. DE C.V. estamos comprometidos con la protección de la información personal de nuestros clientes, prospectos, colaboradores y terceros relacionados.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Como parte de este compromiso, informamos que los datos personales que nos proporcionas son tratados con absoluta confidencialidad y bajo medidas de seguridad administrativas, técnicas y físicas suficientes para garantizar su protección, en apego a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>
            <p className="text-gray-700 font-semibold text-lg">
              Por ello, ponemos a tu disposición el presente Aviso de Privacidad Integral.
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-10 text-gray-700 leading-relaxed">
            {/* Section I */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                I. Identidad y Domicilio del Responsable
              </h2>
              <div className="bg-gray-50 border-l-4 border-gold p-6 rounded mb-4 space-y-3">
                <p className="font-bold text-primary">
                  ACCOUNTTECH SOLUTIONS S.A. DE C.V.
                </p>
                <p className="text-sm">(En lo sucesivo "ACCOUNTTECH" o "la Empresa")</p>
                <div>
                  <p className="font-semibold text-primary mb-2">Domicilio:</p>
                  <p className="text-sm">Almendros 226, Los Olivos, Gómez Palacio, Durango, Mexico.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Correo electrónico en materia de protección de datos:</p>
                  <p className="text-gold font-bold">contacto@accounttech.com.mx</p>
                </div>
              </div>
              <p>
                ACCOUNTTECH es responsable del tratamiento de tus datos personales.
              </p>
            </div>

            {/* Section II */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                II. Finalidades del Tratamiento de Datos
              </h2>
              <p className="mb-6">
                Los datos personales que recabamos directamente de ti, de otras fuentes permitidas por la ley, o los que se generen de la relación jurídica que establezcamos, serán utilizados para las siguientes finalidades:
              </p>

              <div className="mb-8">
                <h3 className="font-bold text-primary mb-4 text-lg">
                  A) Finalidades Primarias (necesarias para la relación contractual y prestación de servicios):
                </h3>
                <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold">
                  {[
                    "Prestación de servicios contables, fiscales y administrativos",
                    "Administración de nómina y seguridad social",
                    "Cumplimiento ante SAT, IMSS, INFONAVIT y demás autoridades",
                    "Elaboración de contratos laborales",
                    "Reclutamiento y selección de personal",
                    "Evaluaciones psicométricas y laborales",
                    "Elaboración de estados financieros y declaraciones",
                    "Análisis fiscal y financiero",
                    "Gestión de facturación y cobranza",
                    "Atención de auditorías, revisiones y requerimientos",
                    "Cumplimiento normativo empresarial",
                    "Formalización y constitución de empresas",
                    "Atención de solicitudes de cotización y asesoría",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="text-gold font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-4 text-lg">
                  B) Finalidades Secundarias:
                </h3>
                <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold mb-4">
                  {[
                    "Envío de información comercial",
                    "Invitaciones a eventos, capacitaciones o webinars",
                    "Boletines informativos y actualizaciones fiscales",
                    "Mercadotecnia y prospección comercial",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="text-gold font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic text-gray-600">
                  Si no deseas que tus datos personales sean tratados para fines secundarios, podrás manifestarlo conforme a lo indicado en el apartado III.
                </p>
              </div>
            </div>

            {/* Section III */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                III. Opciones para Limitar el Uso o Divulgación
              </h2>
              <p className="mb-4">
                Si deseas limitar el uso o divulgación de tus datos personales para fines secundarios, podrás enviar tu solicitud al correo:
              </p>
              <p className="text-gold font-bold mb-6">contacto@accounttech.com.mx</p>
              <p className="mb-4">
                Asimismo, podrás inscribirte en el Registro Público para Evitar Publicidad (REPEP) de PROFECO o REUS de CONDUSEF cuando aplique.
              </p>
              <p className="text-sm italic text-gray-600">
                Si este Aviso no se te da de manera directa, cuentas con un plazo de 5 días hábiles para oponerte al tratamiento para fines secundarios.
              </p>
            </div>

            {/* Section IV */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                IV. Medios para Ejercer tus Derechos ARCO
              </h2>
              <p className="mb-6">Tienes derecho a:</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {["Acceder", "Rectificar", "Cancelar", "Oponernte", "Revocar"].map(
                  (right, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-gold to-gold-dark text-white p-3 rounded text-center font-bold text-xs md:text-sm"
                    >
                      {right}
                    </div>
                  )
                )}
              </div>
              <p className="mb-4">
                Para ejercer estos derechos deberás enviar solicitud al correo:
              </p>
              <p className="text-gold font-bold mb-6">contacto@accounttech.com.mx</p>
              <p className="font-semibold text-primary mb-4">
                La solicitud deberá contener:
              </p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold mb-6">
                {[
                  "a) Nombre completo del titular",
                  "b) Documento que acredite identidad",
                  "c) Descripción clara del derecho que desea ejercer",
                  "d) Datos respecto de los cuales se solicita el ejercicio del derecho",
                  "e) Medio para comunicar respuesta",
                ].map((item, idx) => (
                  <li key={idx} className="text-sm">{item}</li>
                ))}
              </ul>
              <p className="mb-4">
                <span className="font-semibold">ACCOUNTTECH responderá en un plazo máximo de 20 días hábiles</span>, conforme a la Ley.
              </p>
              <p className="font-semibold text-primary mb-4">
                Podremos negar el ejercicio de derechos en los casos previstos por la LFPDPPP, incluyendo:
              </p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  "Cuando no seas el titular o representante acreditado",
                  "Cuando los datos no obren en nuestra base",
                  "Cuando afecte derechos de terceros",
                  "Cuando exista impedimento legal",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section V */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                V. Transferencia de Datos
              </h2>
              <p className="mb-6">Podremos transferir tus datos personales cuando sea necesario para:</p>
              <ul className="space-y-3 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  "Cumplimiento de obligaciones fiscales y laborales",
                  "Autoridades competentes (SAT, IMSS, INFONAVIT u otras)",
                  "Proveedores tecnológicos y sistemas administrativos",
                  "Instituciones financieras cuando sea necesario",
                  "Clientes cuando exista relación contractual",
                  "Plataformas digitales para publicidad y perfilamiento",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-semibold text-gold">
                No comercializamos datos personales.
              </p>
            </div>

            {/* Section VI */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                VI. Uso de Inteligencia Artificial y Tecnología
              </h2>
              <p className="mb-6">
                ACCOUNTTECH podrá utilizar tecnologías de Inteligencia Artificial para:
              </p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold mb-6">
                {[
                  "Automatización de procesos administrativos",
                  "Análisis financiero",
                  "Gestión documental",
                  "Evaluación de riesgos",
                  "Prevención de inconsistencias fiscales",
                  "Uso de chatbots en sitio web",
                  "Optimización de campañas de marketing",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                La Empresa implementa mecanismos de supervisión humana y medidas de seguridad coherentes con un nivel razonable de control basado en riesgos, en cumplimiento con la normativa aplicable.
              </p>
            </div>

            {/* Section VII */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                VII. Cookies y Tecnologías de Rastreo
              </h2>
              <p className="mb-6">Nuestro sitio web puede utilizar:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold">
                  {[
                    "Cookies",
                    "Web beacons",
                    "Google Analytics",
                    "Pixel de Meta",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="text-gold font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="font-semibold text-primary mb-3">
                    Estas herramientas permiten:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Analizar comportamiento de navegación",
                      "Mejorar experiencia del usuario",
                      "Optimizar campañas publicitarias",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="text-gold font-bold">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-sm italic text-gray-600">
                Puedes deshabilitar las cookies desde la configuración de tu navegador.
              </p>
            </div>

            {/* Section VIII */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                VIII. Medidas de Seguridad
              </h2>
              <p className="mb-4">ACCOUNTTECH implementa:</p>
              <ul className="space-y-3 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  "Controles de acceso restringido",
                  "Protocolos internos de confidencialidad",
                  "Sistemas seguros de almacenamiento",
                  "Cifrado y protección de bases de datos",
                  "Contratos de confidencialidad con empleados y proveedores",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">🛡️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section IX */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                IX. Cambios al Aviso de Privacidad
              </h2>
              <p className="mb-4">
                ACCOUNTTECH podrá modificar este Aviso en cualquier momento.
              </p>
              <p>
                Las actualizaciones estarán disponibles en nuestro sitio web oficial.
              </p>
            </div>

            {/* Section X */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                X. Definiciones
              </h2>
              <ul className="space-y-3 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  { term: "Datos personales", def: "cualquier información concerniente a una persona física identificada o identificable." },
                  { term: "Titular", def: "persona física a quien corresponden los datos." },
                  { term: "Tratamiento", def: "obtención, uso, almacenamiento o transferencia de datos." },
                  { term: "Responsable", def: "ACCOUNTTECH SOLUTIONS S.A. DE C.V." },
                  { term: "Transferencia", def: "comunicación de datos a tercero distinto del responsable." },
                  { term: "Ley", def: "Ley Federal de Protección de Datos Personales en Posesión de los Particulares." },
                ].map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <span className="font-semibold text-primary">{item.term}:</span> {item.def}
                  </li>
                ))}
              </ul>
            </div>

            {/* Last Update */}
            <div className="text-center border-t border-gold border-opacity-30 pt-8">
              <h3 className="text-xl font-bold text-primary mb-2">
                Fecha de Última Actualización
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

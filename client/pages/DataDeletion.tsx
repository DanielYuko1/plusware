import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function DataDeletion() {
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
            Política de Eliminación de Datos
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
              ACCOUNTTECH SOLUTIONS S.A. DE C.V. reconoce los derechos de las personas a solicitar la eliminación de sus datos personales conforme a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y demás normativas aplicables.
            </p>
            <p className="text-gray-700 font-semibold text-lg">
              Esta Política de Eliminación de Datos define los procedimientos, plazos y criterios para la eliminación, cancelación o supresión de datos personales en nuestras bases de datos y sistemas.
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-10 text-gray-700 leading-relaxed">
            {/* Section I */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                I. Objetivo y Alcance
              </h2>
              <p className="mb-4">
                Esta Política establece:
              </p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  "El derecho de toda persona a solicitar la eliminación de sus datos personales",
                  "Los procedimientos para ejercer el derecho de cancelación (derecho ARCO)",
                  "Los plazos para procesar solicitudes de eliminación",
                  "Las excepciones y limitaciones legales a la eliminación",
                  "Las responsabilidades de ACCOUNTTECH en materia de protección y eliminación de datos",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section II */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                II. Derechos de Cancelación (Derecho ARCO - Cancelación)
              </h2>
              <p className="mb-6">
                Conforme a la LFPDPPP, toda persona tiene derecho a solicitar la <span className="font-semibold">cancelación de sus datos personales</span>. Esto significa que tienes derecho a:
              </p>
              <ul className="space-y-3 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  "Solicitar que eliminemos tus datos personales de nuestras bases de datos",
                  "Obtener confirmación de la eliminación dentro del plazo legal",
                  "Solicitar la no transferencia de tus datos a terceros",
                  "Detener el tratamiento de tus datos para fines específicos",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section III */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                III. Procedimiento para Solicitar Eliminación de Datos
              </h2>
              <p className="mb-6">
                Para solicitar la eliminación de tus datos personales, sigue estos pasos:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-gold/10 to-transparent p-6 rounded border-l-4 border-gold">
                  <h3 className="font-bold text-primary mb-3">Paso 1: Enviar Solicitud Formal</h3>
                  <p className="text-sm mb-3">
                    Envía una solicitud escrita a:
                  </p>
                  <div className="bg-white p-4 rounded text-sm space-y-2">
                    <p><span className="font-semibold">Email:</span> contacto@accounttech.com.mx</p>
                    <p><span className="font-semibold">Asunto:</span> "Solicitud de Eliminación de Datos Personales"</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gold/10 to-transparent p-6 rounded border-l-4 border-gold">
                  <h3 className="font-bold text-primary mb-3">Paso 2: Proporcionar Información Requerida</h3>
                  <p className="text-sm mb-3">
                    Tu solicitud debe incluir:
                  </p>
                  <ul className="text-sm space-y-2">
                    {[
                      "Nombre completo del titular de los datos",
                      "Identificación oficial con copia",
                      "Domicilio completo para comunicaciones",
                      "Correo electrónico y/o teléfono de contacto",
                      "Descripción clara de los datos a eliminar",
                      "Motivo de la solicitud (opcional)",
                      "Firma del titular o representante",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-gold font-bold">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-gold/10 to-transparent p-6 rounded border-l-4 border-gold">
                  <h3 className="font-bold text-primary mb-3">Paso 3: Confirmación y Procesamiento</h3>
                  <p className="text-sm">
                    Recibirás una confirmación de recepción en un plazo máximo de 5 días hábiles. ACCOUNTTECH procesará tu solicitud conforme a lo establecido en la Sección IV.
                  </p>
                </div>
              </div>
            </div>

            {/* Section IV */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                IV. Plazos de Respuesta y Cumplimiento
              </h2>
              <p className="mb-6">
                ACCOUNTTECH se compromete a responder tus solicitudes conforme a los siguientes plazos:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 border-l-4 border-gold p-6 rounded">
                  <p className="font-bold text-primary mb-3">Confirmación de Recepción</p>
                  <p className="text-sm">Máximo <span className="text-gold font-bold">5 días hábiles</span> después de recibida la solicitud</p>
                </div>
                <div className="bg-gray-50 border-l-4 border-gold p-6 rounded">
                  <p className="font-bold text-primary mb-3">Respuesta a la Solicitud</p>
                  <p className="text-sm">Máximo <span className="text-gold font-bold">20 días hábiles</span> para procesar la eliminación</p>
                </div>
              </div>
              <p className="text-sm italic text-gray-600 bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                En caso de ser necesaria información adicional, estos plazos pueden extenderse hasta 30 días hábiles. Te notificaremos inmediatamente sobre cualquier extensión.
              </p>
            </div>

            {/* Section V */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                V. Excepciones a la Eliminación de Datos
              </h2>
              <p className="mb-6">
                ACCOUNTTECH podrá denegar o limitar la eliminación de datos en los siguientes casos, conforme a la ley:
              </p>
              <ul className="space-y-3 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  {
                    title: "Obligaciones Fiscales y Legales",
                    desc: "Si los datos deben conservarse por disposición del SAT, IMSS, INFONAVIT o autoridades competentes",
                  },
                  {
                    title: "Obligaciones Contractuales",
                    desc: "Cuando la retención es necesaria para cumplir con contratos en vigor o litigios pendientes",
                  },
                  {
                    title: "Cumplimiento Normativo",
                    desc: "Si la conservación es requerida por la Ley Federal del Trabajo u otras disposiciones aplicables",
                  },
                  {
                    title: "Prevención de Fraude",
                    desc: "Para prevenir y detectar actividades ilícitas o fraudulentas",
                  },
                  {
                    title: "Datos de Terceros",
                    desc: "Cuando la eliminación afecte los derechos de otras personas",
                  },
                  {
                    title: "Datos Públicos",
                    desc: "Cuando los datos personales sean de acceso público o hayan sido difundidos voluntariamente",
                  },
                  {
                    title: "Archivo Histórico o de Investigación",
                    desc: "Si existe interés histórico, científico o de investigación comprobado",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <span className="font-semibold text-primary">{item.title}:</span> {item.desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Section VI */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                VI. Proceso de Eliminación de Datos
              </h2>
              <p className="mb-6">
                Una vez aprobada tu solicitud, ACCOUNTTECH implementará el siguiente proceso:
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: "1. Verificación",
                    desc: "Confirmamos tu identidad y validamos la solicitud",
                  },
                  {
                    step: "2. Identificación",
                    desc: "Localizamos todos los registros en nuestras bases de datos",
                  },
                  {
                    step: "3. Eliminación Segura",
                    desc: "Borramos los datos de forma irrecuperable usando métodos certificados",
                  },
                  {
                    step: "4. Auditoría Interna",
                    desc: "Verificamos que los datos hayan sido eliminados completamente",
                  },
                  {
                    step: "5. Notificación",
                    desc: "Te confirmamos por escrito que la eliminación fue completada",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-gold/10 to-transparent p-6 rounded border-l-4 border-gold"
                  >
                    <h4 className="font-bold text-primary mb-2">{item.step}</h4>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section VII */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                VII. Datos Operacionales y Respaldos
              </h2>
              <p className="mb-4">
                Es importante que entiendas que:
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 border-l-4 border-gold p-6 rounded">
                  <p className="font-semibold text-primary mb-2">Eliminación de Bases de Datos Activas</p>
                  <p className="text-sm">Tus datos serán eliminados completamente de nuestros sistemas operacionales</p>
                </div>
                <div className="bg-gray-50 border-l-4 border-gold p-6 rounded">
                  <p className="font-semibold text-primary mb-2">Respaldos de Seguridad</p>
                  <p className="text-sm">Los respaldos automáticos (backups) pueden contener tus datos durante un período adicional (máximo 90 días) antes de ser sobrescritos conforme a nuestros protocolos de seguridad</p>
                </div>
                <div className="bg-gray-50 border-l-4 border-gold p-6 rounded">
                  <p className="font-semibold text-primary mb-2">Archivos Inutilizables</p>
                  <p className="text-sm">Los archivos con datos inutilizables o encriptados serán sobrescritos inmediatamente según protocolos de higiene de datos</p>
                </div>
              </div>
            </div>

            {/* Section VIII */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                VIII. Retención de Datos Residuales
              </h2>
              <p className="mb-6">
                En ciertos casos limitados, podemos retener información mínima después de la eliminación:
              </p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold mb-6">
                {[
                  "Información de auditoría (fechas y referencias de eliminación)",
                  "Registros para cumplimiento legal (máximo 7 años si aplica)",
                  "Datos agregados y anonimizados para análisis",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-gray-600">
                Esta información residual no puede ser utilizada para identificarte y no está sujeta a las restricciones de esta política.
              </p>
            </div>

            {/* Section IX */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                IX. Derecho a Denegar la Solicitud
              </h2>
              <p className="mb-6">
                Si denegamos tu solicitud de eliminación, te informaremos por escrito incluyendo:
              </p>
              <ul className="space-y-2 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  "Motivo específico de la negación",
                  "Disposición legal que fundamenta la negación",
                  "Opciones disponibles (como bloqueo de datos)",
                  "Proceso para recurrir la decisión ante INAI (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section X */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                X. Transferencias de Datos Eliminadas
              </h2>
              <p className="mb-4">
                Si tus datos personales ya fueron compartidos con terceros antes de tu solicitud de eliminación:
              </p>
              <div className="bg-gray-50 border-l-4 border-gold p-6 rounded space-y-3 mb-4">
                <p className="text-sm">
                  <span className="font-semibold text-primary">Notificación a Terceros:</span> Notificaremos a los receptores de tus datos sobre tu solicitud de eliminación
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-primary">Casos Especiales:</span> Para autoridades (SAT, IMSS), la eliminación se regirá por sus propias políticas de retención
                </p>
              </div>
              <p className="text-sm italic text-gray-600">
                ACCOUNTTECH no es responsable por la gestión de tus datos en manos de terceros después de la notificación.
              </p>
            </div>

            {/* Section XI */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                XI. Protección Durante la Eliminación
              </h2>
              <p className="mb-6">
                ACCOUNTTECH garantiza que durante el proceso de eliminación:
              </p>
              <ul className="space-y-3 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  "Tus datos permanecerán confidenciales y protegidos",
                  "Solo personal autorizado tendrá acceso durante el proceso",
                  "Se mantendrán registros de auditoría del proceso de eliminación",
                  "No se accederá a tus datos para ningún otro propósito",
                  "Se seguirán protocolos de seguridad de la industria",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-gold font-bold">🛡️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section XII */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                XII. Derechos Adicionales
              </h2>
              <p className="mb-6">
                Además del derecho a la cancelación, tienes otros derechos ARCO:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Acceso (A)",
                    desc: "Solicitar acceso a tus datos personales",
                  },
                  {
                    title: "Rectificación (R)",
                    desc: "Corregir datos inexactos",
                  },
                  {
                    title: "Cancelación (C)",
                    desc: "Solicitar eliminación de tus datos",
                  },
                  {
                    title: "Oposición (O)",
                    desc: "Oponernte al tratamiento de datos",
                  },
                ].map((right, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-gold to-gold-dark text-white p-4 rounded"
                  >
                    <p className="font-bold text-sm mb-2">{right.title}</p>
                    <p className="text-xs">{right.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm italic text-gray-600">
                Para ejercer cualquiera de estos derechos, contacta a: contacto@accounttech.com.mx
              </p>
            </div>

            {/* Section XIII */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                XIII. Cambios a esta Política
              </h2>
              <p className="mb-6">
                ACCOUNTTECH podrá actualizar esta Política de Eliminación de Datos en cualquier momento. Los cambios serán comunicados a través de nuestro sitio web y entrarán en vigor inmediatamente.
              </p>
            </div>

            {/* Section XIV */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                XIV. Contacto para Ejercer Derechos
              </h2>
              <div className="bg-gray-50 border-l-4 border-gold p-6 rounded space-y-4">
                <div>
                  <p className="font-semibold text-primary mb-2">Responsable de Datos Personales:</p>
                  <p className="text-sm">ACCOUNTTECH SOLUTIONS S.A. DE C.V.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Email Oficial:</p>
                  <p className="text-sm">contacto@accounttech.com.mx</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Teléfono:</p>
                  <p className="text-sm">+52 (33) 1820-0036</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Domicilio:</p>
                  <p className="text-sm">Almendros 226, Los Olivos, Gómez Palacio, Durango, México</p>
                </div>
              </div>
            </div>

            {/* Section XV */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                XV. Recursos Legales
              </h2>
              <p className="mb-6">
                Si consideras que tus derechos no han sido respetados, puedes:
              </p>
              <ul className="space-y-3 bg-gray-50 p-6 rounded border-l-4 border-gold">
                {[
                  {
                    title: "Recurrir ante INAI",
                    desc: "Presentar un recurso de revisión ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales",
                  },
                  {
                    title: "Amparo",
                    desc: "Ejercer el juicio de amparo conforme a la Ley de Amparo",
                  },
                  {
                    title: "Denuncia",
                    desc: "Presentar denuncia ante las autoridades competentes",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <span className="font-semibold text-primary">{item.title}:</span> {item.desc}
                  </li>
                ))}
              </ul>
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

            <div className="flex gap-6 flex-wrap justify-center md:justify-end">
              <button
                onClick={goToHome}
                className="hover:text-gold transition-colors cursor-pointer"
              >
                Inicio
              </button>
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

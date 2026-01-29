import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad — Run4Wish | Wishing4World S.L.",
  description:
    "Política de privacidad de Run4Wish. RGPD, LOPDGDD. Responsable: Wishing4World S.L. Contacto: hola@run4wish.com.",
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidad() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Política de privacidad", item: `${SITE_URL}/politica-privacidad` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="legal-wrap">
        <h1 id="privacidad-heading">Política de privacidad — Run4Wish</h1>
        <p className="legal-meta">
          Responsable: Wishing4World S.L. (España) · Contacto:{" "}
          <a href="mailto:hola@run4wish.com">hola@run4wish.com</a> · Última actualización: 13/01/2026
        </p>

        <section className="legal-section" aria-labelledby="p1">
          <h2 id="p1">1. Responsable del tratamiento</h2>
          <p>
            En cumplimiento del RGPD y la LOPDGDD, se informa que el responsable del tratamiento es:
          </p>
          <ul>
            <li>Responsable: Wishing4World S.L.</li>
            <li>País: España</li>
            <li>Correo: hola@run4wish.com</li>
            <li>Domicilio social: (pendiente de incorporación y actualización)</li>
            <li>CIF/NIF: (pendiente de incorporación y actualización)</li>
          </ul>
          <p>Wishing4World S.L. incorporará estos datos en cuanto estén formalmente disponibles.</p>
        </section>

        <section className="legal-section" aria-labelledby="p2">
          <h2 id="p2">2. Normativa aplicable</h2>
          <ul>
            <li>Reglamento (UE) 2016/679 (RGPD)</li>
            <li>Ley Orgánica 3/2018 (LOPDGDD)</li>
            <li>Ley 34/2002 (LSSI-CE), cuando aplique a comunicaciones electrónicas</li>
          </ul>
        </section>

        <section className="legal-section" aria-labelledby="p3">
          <h2 id="p3">3. Datos personales que tratamos</h2>
          <p>Run4Wish puede tratar:</p>
          <ul>
            <li>
              <strong>Identificación y cuenta:</strong> email, alias/nombre de usuario, fecha de alta
            </li>
            <li>
              <strong>Uso de la app:</strong> participación, respuestas, progreso, puntuaciones,
              rankings, actividad dentro del juego
            </li>
            <li>
              <strong>Datos técnicos:</strong> dispositivo, sistema operativo, identificadores
              técnicos, IP anonimizada, logs de seguridad
            </li>
            <li>
              <strong>Pagos (si aplica):</strong> información imprescindible para gestionar la
              compra/suscripción (normalmente gestionada por el proveedor de pago; Run4Wish no
              almacena datos completos de tarjeta)
            </li>
          </ul>
          <p>No se tratan datos especialmente protegidos de forma intencional.</p>
        </section>

        <section className="legal-section" aria-labelledby="p4">
          <h2 id="p4">4. Finalidades del tratamiento</h2>
          <p>Tratamos datos para:</p>
          <ul>
            <li>Gestionar registro, acceso y seguridad de la cuenta</li>
            <li>Prestar el servicio de juego, retos y funcionalidades asociadas</li>
            <li>Gestionar compras, moneda digital y/o suscripciones, si existen</li>
            <li>
              Enviar comunicaciones necesarias (confirmación, avisos operativos, seguridad, cambios
              relevantes)
            </li>
            <li>Mejorar el rendimiento y experiencia de la app</li>
            <li>Cumplir obligaciones legales</li>
          </ul>
        </section>

        <section className="legal-section" aria-labelledby="p5">
          <h2 id="p5">5. Base legal</h2>
          <ul>
            <li>Ejecución del servicio (cuenta y uso de la app)</li>
            <li>Consentimiento (cuando corresponda)</li>
            <li>Cumplimiento de obligaciones legales</li>
            <li>
              Interés legítimo (seguridad, prevención de fraude y mejora técnica), cuando resulte
              aplicable y proporcionado
            </li>
          </ul>
        </section>

        <section className="legal-section" aria-labelledby="p6">
          <h2 id="p6">6. Conservación de datos</h2>
          <ul>
            <li>Mientras la cuenta esté activa</li>
            <li>Hasta solicitud de eliminación por parte del usuario</li>
            <li>
              Y, en su caso, durante plazos legales obligatorios (fiscales/contables/seguridad)
            </li>
          </ul>
        </section>

        <section className="legal-section" aria-labelledby="p7">
          <h2 id="p7">7. Destinatarios y encargados del tratamiento</h2>
          <p>No vendemos ni cedemos datos personales.</p>
          <p>
            Podemos compartir datos con proveedores necesarios para operar el servicio (por ejemplo:
            infraestructura, base de datos, envío de emails, analítica técnica, pagos), bajo
            acuerdos de encargo de tratamiento y medidas RGPD.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="p8">
          <h2 id="p8">8. Transferencias internacionales</h2>
          <p>
            Si algún proveedor estuviera fuera del EEE, se aplicarán garantías adecuadas (como
            cláusulas contractuales tipo) para proteger los datos conforme al RGPD.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="p9">
          <h2 id="p9">9. Derechos del usuario</h2>
          <p>
            Puedes ejercer: acceso, rectificación, supresión, oposición, limitación y portabilidad.
          </p>
          <p>
            Para ejercerlos: <a href="mailto:hola@run4wish.com">hola@run4wish.com</a>
          </p>
          <p>También puedes reclamar ante la Agencia Española de Protección de Datos (AEPD).</p>
        </section>

        <section className="legal-section" aria-labelledby="p10">
          <h2 id="p10">10. Eliminación de cuenta</h2>
          <p>
            Actualmente, la eliminación de cuenta se gestiona solo por solicitud email a{" "}
            <a href="mailto:hola@run4wish.com">hola@run4wish.com</a>.
          </p>
          <p>Se podrán solicitar verificaciones mínimas para evitar suplantaciones.</p>
        </section>

        <section className="legal-section" aria-labelledby="p11">
          <h2 id="p11">11. Edad mínima</h2>
          <p>
            Run4Wish es solo para mayores de 18 años. Si detectamos un registro indebido, podremos
            bloquear y eliminar la cuenta.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="p12">
          <h2 id="p12">12. Comunicaciones y baja</h2>
          <p>Podemos enviar emails necesarios del servicio.</p>
          <p>
            Existe un sistema de baja (opt-out) para comunicaciones no esenciales mediante enlace de
            baja en los correos. La baja se registra y se respeta, salvo un único email final de
            confirmación de baja.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="p13">
          <h2 id="p13">13. Seguridad</h2>
          <p>
            Aplicamos medidas razonables de seguridad técnicas y organizativas para proteger los
            datos frente a accesos no autorizados, pérdida o alteración.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="p14">
          <h2 id="p14">14. Cambios en la política</h2>
          <p>
            Podemos actualizar esta política por motivos legales o técnicos. La versión vigente
            estará siempre disponible en la app.
          </p>
        </section>

        <section className="legal-section" aria-labelledby="p15">
          <h2 id="p15">15. Aceptación</h2>
          <p>El uso de Run4Wish implica la lectura y aceptación de esta Política de Privacidad.</p>
        </section>
      </div>
    </>
  );
}

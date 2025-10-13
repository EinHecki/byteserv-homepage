import { useState } from "react";
import Modal from "./Modal";

function Footer() {
  const [openModal, setOpenModal] = useState<null | "imprint" | "privacy">(null);

  return (
    <footer className="px-6 sm:px-10 py-6 mt-20 w-full text-sm text-gray-200 bg-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="opacity-90">&copy; {new Date().getFullYear()} ByteServ. Alle Rechte vorbehalten.</div>
        <nav className="flex items-center gap-4">
          <button
            className="underline decoration-white/30 hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 rounded"
            onClick={() => setOpenModal("imprint")}
          >
            Impressum
          </button>
          <span className="opacity-40">|</span>
          <button
            className="underline decoration-white/30 hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 rounded"
            onClick={() => setOpenModal("privacy")}
          >
            Datenschutz
          </button>
        </nav>
      </div>

      <Modal
        open={openModal === "imprint"}
        onClose={() => setOpenModal(null)}
        title="Impressum"
      >
        <p><strong>ByteServ IT Solutions</strong></p>
        <p>Musterstraße 12, 12345 Musterstadt, Deutschland</p>
        <p>E-Mail: <a className="underline" href="mailto:hello@byteserv.example">hello@byteserv.example</a></p>
        <p>Telefon: <a className="underline" href="tel:+491234567890">+49 123 456 7890</a></p>
        <p className="mt-3">Vertreten durch: Max Mustermann</p>
        <p>USt-IdNr.: DE123456789</p>
      </Modal>

      <Modal
        open={openModal === "privacy"}
        onClose={() => setOpenModal(null)}
        title="Datenschutzerklärung (Kurzfassung)"
      >
        <p>Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der DSGVO und nur, soweit dies zur Bereitstellung unserer Leistungen erforderlich ist.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Verantwortlicher: ByteServ IT Solutions</li>
          <li>Zwecke: Kommunikation, Angebotserstellung, Vertragsdurchführung</li>
          <li>Rechtsgrundlagen: Art. 6 Abs. 1 lit. a, b, f DSGVO</li>
          <li>Speicherdauer: nur so lange wie erforderlich bzw. gesetzlich vorgeschrieben</li>
          <li>Ihre Rechte: Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch</li>
        </ul>
        <p className="mt-3">Kontakt für Datenschutzanfragen: <a className="underline" href="mailto:privacy@byteserv.example">privacy@byteserv.example</a></p>
      </Modal>
    </footer>
  );
}

export default Footer;

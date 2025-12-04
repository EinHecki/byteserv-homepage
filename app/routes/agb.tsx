import type { Route } from "./+types/agb";
import { Link } from "react-router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AGB - ByteServ" },
    { name: "description", content: "Allgemeine Geschäftsbedingungen der ByteServ." },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function AGB() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <main className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <span>←</span> Zurück zur Startseite
          </Link>

          <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-gray-400 text-sm mb-12">Stand: Mai 2025</p>

            <div className="space-y-12">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">1. Geltungsbereich</h2>
                <p className="text-gray-300 mb-4">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Dienstleistungen und sonstigen Leistungen von Darian Naumann (nachfolgend „Dienstleister") gegenüber Verbrauchern und Unternehmen (nachfolgend "Kunde"), soweit nicht schriftlich etwas anderes vereinbart wurde.
                </p>
                <p className="text-gray-300">
                  Abweichende AGB des Kunden finden keine Anwendung, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">2. Vertragsgegenstand</h2>
                <p className="text-gray-300 mb-4">
                  Der Dienstleister erbringt IT-Dienstleistungen im Bereich der Informationstechnologie. Hierzu zählen insbesondere, aber nicht abschließend, Leistungen wie IT-Beratung und Konzeption, die Installation und Konfiguration von Hard- und Software, die Betreuung und Wartung von Netzwerken und IT-Infrastrukturen, Datenrettung sowie die Entwicklung und Umsetzung von Datensicherungskonzepten, IT-Support vor Ort oder per Fernwartung, Schulungen sowie individuelle Einweisungen in IT-Systeme, die Entwicklung und Anpassung von Softwarelösungen sowie die Einrichtung und Betreuung von Cloud- und Serversystemen. Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Einzelvertrag oder einem individuellen Angebot. Änderungen, Erweiterungen oder Einschränkungen der vereinbarten Leistungen bedürfen der schriftlichen Vereinbarung.
                </p>
                <p className="text-gray-300">
                  Der Dienstleister ist berechtigt, zur Durchführung der vereinbarten Leistungen Subunternehmer einzusetzen, sofern dem keine berechtigten Interessen des Auftraggebers entgegenstehen. Ein konkreter Erfolg im Sinne eines Werkvertrages wird nur dann geschuldet, wenn dies ausdrücklich vereinbart wurde; andernfalls handelt es sich um Dienstleistungen gemäß §§ 611 ff. BGB. Eine durchgehende Verfügbarkeit oder vollständige Fehlerfreiheit von IT-Systemen wird nicht garantiert, es sei denn, dies wurde ausdrücklich vertraglich zugesichert.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">3. Vertragsschluss</h2>
                <p className="text-gray-300">
                  Ein Vertrag kommt durch die Annahme eines schriftlichen oder mündlichen Angebots des Dienstleisters durch den Kunden zustande. Alternativ gilt ein Vertrag auch dann als geschlossen, wenn der Kunde die angebotenen Leistungen tatsächlich in Anspruch nimmt. Erfolgt keine ausdrückliche Annahmeerklärung, so gilt die Annahme spätestens mit dem Beginn der Nutzung der Leistungen als erfolgt.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">4. Leistungs- und Mitwirkungspflichten des Auftraggebers</h2>
                <p className="text-gray-300 mb-4">
                  Die vom Dienstleister geschuldeten Leistungen werden fachgerecht, sorgfältig und nach dem jeweils aktuellen Stand der Technik erbracht. Der Kunde verpflichtet sich, alle zur ordnungsgemäßen Durchführung der Leistungen erforderlichen Mitwirkungsleistungen rechtzeitig und vollständig zu erbringen. Hierzu zählen insbesondere die rechtzeitige Bereitstellung aller relevanten Informationen, Zugangsdaten, Zugänge und Systemberechtigung sowie der notwendige physische oder digitale Zugang zu Geräten, Systemen oder Softwareumgebungen, soweit diese für die Leistungserbringung erforderlich sind. Der Kunde ist zudem verpflichtet, vor Beginn der Arbeiten eine vollständige Datensicherung vorzunehmen und den Dienstleister ausdrücklich darauf hinzuweisen, wenn eine solche Sicherung nicht vorliegt.
                </p>
                <p className="text-gray-300 mb-4">
                  Unterbleiben notwendige Mitwirkungen trotz Aufforderung und Fristsetzung, ist der Dienstleister berechtigt, die Leistungserbringung bis zur vollständigen Mitwirkung auszusetzen oder – nach erfolgloser Fristsetzung – ganz oder teilweise vom Vertrag zurückzutreten. Etwaige dadurch entstehende Verzögerungen oder Zusatzkosten gehen zu Lasten des Kunden.
                </p>
                <p className="text-gray-300">
                  Bei Unternehmenskunden ist darüber hinaus ein fachlich und technisch berechtigter Ansprechpartner zu benennen, der zur Abstimmung und Entscheidung während der Leistungserbringung befugt ist und dem Dienstleister als zentrale Kontaktperson zur Verfügung steht.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">5. Vergütung</h2>
                <p className="text-gray-300 mb-4">
                  Die Vergütung der Leistungen erfolgt auf Grundlage des vereinbarten Stundensatzes oder gemäß einer individuell getroffenen Preisvereinbarung. Alle genannten Preise verstehen sich, sofern nicht ausdrücklich anders ausgewiesen, exklusiv der jeweils geltenden gesetzlichen Umsatzsteuer.
                </p>
                <p className="text-gray-300 mb-4">
                  Bei der Beschaffung von Hardware, Lizenzen oder Drittsoftware ist der Dienstleister berechtigt, angemessene Abschlagszahlungen oder Vorauszahlungen zu verlangen. Ein Anspruch auf Skonto, Rabatte oder sonstige Nachlässe besteht nur, wenn dies ausdrücklich und schriftlich vereinbart wurde.
                </p>
                <p className="text-gray-300 mb-4">
                  Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 10 Kalendertagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig. Als standardmäßiges Zahlungsmittel gilt die SEPA-Überweisung auf das in der Rechnung angegebene Geschäftskonto des Dienstleisters. Weitere Zahlungsmöglichkeiten sind ausschließlich nach vorheriger ausdrücklicher Absprache mit dem Dienstleister möglich.
                </p>
                <p className="text-gray-300">
                  Eine Aufrechnung durch den Kunden ist nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen zulässig. Die Geltendmachung von Zurückbehaltungsrechten ist nur insoweit möglich, als sie auf demselben Vertragsverhältnis beruhen.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">6. Zahlungsbedingungen</h2>
                <p className="text-gray-300 mb-4">
                  Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 10 Tagen ab Rechnungsdatum ohne Abzug zahlbar, gemäß den Regelungen in Punkt 5 (Vergütung). Bei Zahlungsverzug gelten die gesetzlichen Regelungen, insbesondere § 286 und § 288 BGB, sowie die daraus resultierenden Verzugszinsen und Mahngebühren.
                </p>
                <p className="text-gray-300 mb-4">
                  Kommt der Kunde mit der Zahlung mehr als 30 Tage in Verzug, ist der Dienstleister berechtigt, die Leistungserbringung auszusetzen und/oder den Vertrag außerordentlich zu kündigen. Der Dienstleister ist ferner berechtigt, offene Forderungen an einen Inkassodienstleister abzutreten, um die Forderung einzutreiben.
                </p>
                <p className="text-gray-300">
                  Zur Prüfung der Bonität des Kunden darf der Dienstleister bei berechtigtem Interesse eine Auskunft bei einer anerkannten Wirtschaftsauskunftei einholen. Der Kunde erklärt sich mit der Einholung einer solchen Auskunft einverstanden, soweit dies zur Wahrung berechtigter Interessen des Dienstleisters erforderlich ist.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">7. Gewährleistung</h2>
                <p className="text-gray-300 mb-4">
                  Es gelten die gesetzlichen Gewährleistungsbestimmungen. Der Dienstleister gewährleistet, dass die erbrachten Leistungen frei von Mängeln sind und den vertraglich vereinbarten Spezifikationen entsprechen.
                </p>
                <p className="text-gray-300 mb-3">Keine Gewährleistung besteht in den folgenden Fällen:</p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>Mängel, die auf Leistungen Dritter (z. B. Softwareanbieter, Hardwarehersteller) zurückzuführen sind,</li>
                  <li>Schäden, die durch unsachgemäße Nutzung, Bedienfehler oder unautorisierte Eingriffe des Kunden oder Dritter entstehen,</li>
                  <li>Fehler oder Mängel, die nicht vom Dienstleister verursacht wurden oder die sich aus fehlerhaften oder unvollständigen Mitwirkungen des Kunden ergeben,</li>
                  <li>Mängel, die nach Ablauf der vereinbarten Gewährleistungsfrist auftreten.</li>
                </ul>
                <p className="text-gray-300">
                  Der Kunde ist verpflichtet, etwaige Mängel unverzüglich, spätestens jedoch innerhalb von 14 Tagen nach Kenntnisnahme, dem Dienstleister mitzuteilen.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">8. Haftung</h2>

                <h3 className="text-xl font-semibold mb-3 text-white">Haftung gegenüber Verbrauchern (B2C)</h3>
                <p className="text-gray-300 mb-3">Gegenüber Verbrauchern im Sinne des § 13 BGB haftet der Dienstleister uneingeschränkt:</p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>bei Schäden aus der Verletzung von Leben, Körper oder Gesundheit,</li>
                  <li>bei vorsätzlichem oder grob fahrlässigem Verhalten,</li>
                  <li>nach den Bestimmungen des Produkthaftungsgesetzes,</li>
                  <li>im Rahmen ausdrücklich übernommener Garantien.</li>
                </ul>
                <p className="text-gray-300 mb-4">
                  Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (sog. Kardinalpflichten) ist die Haftung des Dienstleisters auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglichen und auf deren Einhaltung der Kunde regelmäßig vertrauen darf.
                </p>
                <p className="text-gray-300 mb-4">
                  Im Übrigen ist die Haftung für einfache Fahrlässigkeit ausgeschlossen. Für mittelbare Schäden – wie entgangener Gewinn, Betriebsunterbrechung, Datenverlust, Verlust von Geschäftsmöglichkeiten oder Schäden durch Dritte – haftet der Dienstleister gegenüber Verbrauchern nur, soweit dies gesetzlich zulässig ist und der Schaden auf vorsätzlichem oder grob fahrlässigem Verhalten des Dienstleisters beruht.
                </p>
                <p className="text-gray-300 mb-4">
                  Verbraucher sind verpflichtet, alle zumutbaren Mitwirkungspflichten zu erfüllen, insbesondere eine vollständige und aktuelle Datensicherung vor Beginn der Arbeiten durchzuführen und alle relevanten Systeminformationen, Zugänge und Besonderheiten rechtzeitig offenzulegen. Unterbleiben diese Mitwirkungen, ist die Haftung des Dienstleisters für daraus entstehende Schäden ausgeschlossen, es sei denn, der Dienstleister handelt vorsätzlich oder grob fahrlässig.
                </p>
                <p className="text-gray-300 mb-4">
                  Der Dienstleister haftet nicht für Funktionsstörungen oder Schäden, die durch ungeeignete oder nicht kompatible Soft- oder Hardware auf Kundenseite, durch mangelnde Systemanforderungen oder durch Drittanbieter (z. B. Hosting-Anbieter, Dienstleister des Kunden) entstehen, sofern diese nicht vom Dienstleister selbst beauftragt wurden.
                </p>
                <p className="text-gray-300 mb-6">
                  Diese Haftungsregelungen gelten im Rahmen der jeweils geltenden gesetzlichen Vorschriften in ihrer aktuellen Fassung. Unabdingbare Rechte von Verbrauchern bleiben unberührt.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-white">Haftung gegenüber Unternehmen und Unternehmern (B2B)</h3>
                <p className="text-gray-300 mb-3">Der Dienstleister haftet uneingeschränkt:</p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                  <li>bei Schäden aus der Verletzung von Leben, Körper oder Gesundheit,</li>
                  <li>bei vorsätzlichem oder grob fahrlässigem Verhalten,</li>
                  <li>nach den Bestimmungen des Produkthaftungsgesetzes,</li>
                  <li>im Rahmen ausdrücklich übernommener Garantien.</li>
                </ul>
                <p className="text-gray-300 mb-4">
                  Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Vertragspartner regelmäßig vertrauen darf.
                </p>
                <p className="text-gray-300 mb-4">
                  Im Übrigen ist die Haftung für einfache Fahrlässigkeit ausgeschlossen. Dies gilt auch zugunsten der gesetzlichen Vertreter, Mitarbeitenden, Verrichtungsgehilfen und Erfüllungsgehilfen des Dienstleisters.
                </p>
                <p className="text-gray-300 mb-4">
                  Die Haftung für mittelbare Schäden, insbesondere entgangenen Gewinn, Betriebsunterbrechung, Datenverluste oder Schäden durch Dritte, ist – außer bei Vorsatz oder grober Fahrlässigkeit – ausgeschlossen.
                </p>
                <p className="text-gray-300 mb-4">
                  Die Haftung des Dienstleisters ist – soweit gesetzlich zulässig – auf die Höhe der vom Kunden im Rahmen des betreffenden Auftrags gezahlten Vergütung, maximal jedoch 2.000 Euro je Schadensfall, begrenzt, sofern keine andere Vereinbarung getroffen wurde.
                </p>
                <p className="text-gray-300 mb-4">
                  Sofern der Dienstleister im Rahmen von Projekten oder IT-Infrastrukturen Dritter tätig wird (z. B. durch Mitwirkung bei einem anderen IT-Dienstleister), haftet er nur für nachweislich eigenverantwortlich erbrachte und dokumentierte Leistungen. Eine Haftung für Schäden, deren Ursache nicht eindeutig dem Dienstleister zugeordnet werden kann, ist ausgeschlossen.
                </p>
                <p className="text-gray-300 mb-4">
                  Der Kunde ist verpflichtet, vor Beginn von Arbeiten eine vollständige, aktuelle und funktionsfähige Datensicherung vorzunehmen. Erfolgt keine Sicherung, hat der Kunde den Dienstleister vorab ausdrücklich darüber zu informieren. Unterbleibt dieser Hinweis, gilt die Datensicherung als erfolgt. Für Datenverluste haftet der Dienstleister ausschließlich bei vorsätzlichem oder grob fahrlässigem Verhalten, sofern der Kunde seiner Pflicht zur Datensicherung nicht ordnungsgemäß nachgekommen ist.
                </p>
                <p className="text-gray-300 mb-4">
                  Mit der Übergabe von Zugangsdaten (z. B. Passwörter, Logins, Serverzugänge) geht die Verantwortung für deren sichere Aufbewahrung auf den Kunden über. Für Schäden infolge Verlusts oder Missbrauchs haftet der Dienstleister nur bei grober Fahrlässigkeit oder Vorsatz.
                </p>
                <p className="text-gray-300 mb-4">
                  Der Kunde stellt sicher, dass alle übermittelten Inhalte (z. B. Texte, Bilder, Logos, Softwarebestandteile) rechtmäßig verwendet werden dürfen. Der Dienstleister übernimmt keine rechtliche Prüfung. Der Kunde stellt den Dienstleister von sämtlichen Ansprüchen Dritter frei, die aufgrund einer Verletzung von Rechten durch übermittelte Inhalte entstehen.
                </p>
                <p className="text-gray-300">
                  Erstellt der Dienstleister im Rahmen der Vertragsdurchführung Inhalte, verbleiben die Urheber- und Verwertungsrechte – soweit nicht ausdrücklich abweichend vereinbart – beim Dienstleister. Eine rechtliche Prüfung auf Schutzrechtsverletzungen erfolgt nicht.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">9. Datenschutz</h2>
                <p className="text-gray-300 mb-4">
                  Der Dienstleister verpflichtet sich, alle geltenden Datenschutzgesetze, insbesondere die Datenschutz-Grundverordnung (DSGVO) und das Bundesdatenschutzgesetz (BDSG), einzuhalten. Personenbezogene Daten werden ausschließlich zur Vertragsabwicklung verwendet und nur dann an Dritte weitergegeben, wenn eine Rechtsgrundlage hierfür besteht, der Kunde ausdrücklich eingewilligt hat oder dies zur Erfüllung des Vertrages erforderlich ist.
                </p>
                <p className="text-gray-300 mb-4">
                  Hierzu kann es erforderlich sein, dass der Dienstleister personenbezogene Daten an Dritte weitergibt, wie z. B. an Subunternehmer, Dienstleister oder andere Partner, die zur Erbringung der vertraglich vereinbarten Leistungen erforderlich sind. In diesem Fall wird mit den Dritten eine Auftragsverarbeitungsvereinbarung (AVV) geschlossen, um sicherzustellen, dass diese Dritten die Datenschutzbestimmungen einhalten und die personenbezogenen Daten nur im Rahmen des Vertrages verwenden.
                </p>
                <p className="text-gray-300">
                  Der Kunde wird darüber informiert, dass die Verarbeitung seiner personenbezogenen Daten im Einklang mit der Datenschutzerklärung des Dienstleisters erfolgt. Weitere Details zur Datenverarbeitung, zu den Rechten des Kunden sowie zur Aufbewahrung und Löschung von personenbezogenen Daten sind der aktuellen Datenschutzerklärung des Dienstleisters zu entnehmen.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">10. Eigentumsvorbehalt</h2>
                <p className="text-gray-300 mb-4">
                  Gelieferte Waren bleiben bis zur vollständigen Bezahlung des Kaufpreises sowie aller bestehenden Forderungen aus der Geschäftsbeziehung das Eigentum des Dienstleisters. Der Kunde ist verpflichtet, die gelieferten Waren bis zur vollständigen Bezahlung pfleglich zu behandeln und auf eigene Kosten gegen die üblichen Risiken (z. B. Diebstahl, Feuer, Wasserschäden) zu versichern.
                </p>
                <p className="text-gray-300 mb-4">
                  Bei Weiterveräußern der Waren, die noch im Eigentum des Dienstleisters stehen, tritt der Kunde bereits jetzt alle Forderungen aus dem Weiterverkauf an den Dienstleister ab. Der Dienstleister nimmt die Abtretung hiermit an. Der Kunde bleibt jedoch zur Einziehung der Forderung berechtigt, solange er seinen Verpflichtungen aus diesem Vertrag ordnungsgemäß nachkommt. Auf Verlangen des Dienstleisters hat der Kunde die abgetretenen Forderungen und deren Schuldner zu benennen und alle erforderlichen Auskünfte zur Einziehung der Forderung zu erteilen.
                </p>
                <p className="text-gray-300">
                  Im Falle eines Zahlungsverzugs oder bei einer Insolvenz des Kunden ist der Dienstleister berechtigt, die Ware zurückzufordern und vom Vertrag zurückzutreten.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">11. Übergabe von Administrations- und Zugangsdaten</h2>
                <p className="text-gray-300 mb-4">
                  Nach der Übergabe von vollständigen Administrations- oder Zugangsdaten (z. B. nach Projektabschluss oder auf ausdrücklichen Wunsch des Kunden) geht die Verantwortung für deren Verwaltung, Aufbewahrung und Sicherheit auf den Kunden über. Der Kunde ist verpflichtet, diese Daten vor unbefugtem Zugriff zu schützen und regelmäßig auf deren Sicherheit zu überprüfen.
                </p>
                <p className="text-gray-300">
                  Eine Haftung des Dienstleisters für nachträgliche Systemeingriffe, Sicherheitslücken oder Datenverluste ab dem Zeitpunkt der Übergabe ist ausgeschlossen, es sei denn, der Dienstleister handelt vorsätzlich oder grob fahrlässig. Weitere Details zur Haftung des Dienstleisters sind unter Punkt 8 ("Haftung") dieses Dokuments zu finden.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">12. Nutzung von Subunternehmern und Erfüllungsgehilfen</h2>
                <p className="text-gray-300 mb-4">
                  Der Dienstleister ist berechtigt, zur Erfüllung seiner vertraglichen Verpflichtungen geeignete Subunternehmer oder Erfüllungsgehilfen einzusetzen. Der Dienstleister verpflichtet sich, diese sorgfältig auszuwählen und deren Leistungen in Übereinstimmung mit den vertraglichen Vereinbarungen zu überwachen.
                </p>
                <p className="text-gray-300">
                  Der Dienstleister bleibt auch bei Beauftragung von Subunternehmern oder Erfüllungsgehilfen für die ordnungsgemäße Erbringung der vertraglich vereinbarten Leistungen gegenüber dem Kunden verantwortlich.
                </p>
              </section>

              {/* Section 13 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">13. Teilleistungen</h2>
                <p className="text-gray-300 mb-4">
                  Der Dienstleister ist berechtigt, Teilleistungen zu erbringen, sofern dies dem Kunden zumutbar ist. Teilleistungen gelten als Teil der gesamten vertraglich vereinbarten Leistung und sind entsprechend der Vereinbarung zwischen den Parteien abzunehmen und zu vergüten. Die Abnahme von Teilleistungen erfolgt unter den gleichen Bedingungen wie die vollständige Leistungserbringung.
                </p>
                <p className="text-gray-300">
                  Im Falle von Teilleistungen wird der Dienstleister den Kunden rechtzeitig über den Fortschritt informieren und etwaige Teilleistungen zur Abnahme anbieten, sofern dies im Rahmen des Projekts erforderlich ist. Teilleistungen dürfen die Gesamterfüllung der vertraglichen Verpflichtungen nicht unangemessen verzögern oder den Gesamtfortschritt des Projekts beeinträchtigen.
                </p>
              </section>

              {/* Section 14 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">14. Änderungen und Nebenabreden</h2>
                <p className="text-gray-300">
                  Ergänzungen, Änderungen oder Nebenabreden dieses Vertrags bedürfen der Schriftform. Dies gilt auch für den Verzicht auf das Schriftformerfordernis, sofern nicht gesetzlich etwas anderes vorgeschrieben ist.
                </p>
              </section>

              {/* Section 15 */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">15. Schlussbestimmungen</h2>
                <p className="text-gray-300 mb-4">
                  Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam oder undurchführbar sein, so bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Anstelle der unwirksamen oder undurchführbaren Bestimmung gilt diejenige rechtlich zulässige Regelung, die dem wirtschaftlichen Zweck der unwirksamen oder undurchführbaren Bestimmung am nächsten kommt.
                </p>
                <p className="text-gray-300 mb-4">
                  Es gilt das Recht der Bundesrepublik Deutschland.
                </p>
                <p className="text-gray-300">
                  Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Bonn, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                </p>
              </section>

              {/* Footer */}
              <div className="pt-8 border-t border-white/10 text-center">
                <p className="text-gray-400">Bonn, Mai 2025</p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}

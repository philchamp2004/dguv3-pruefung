// script.js
document.getElementById('dguv3-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const gerätName = document.getElementById('gerät-name').value;
    const gerätTyp = document.getElementById('gerät-typ').value;
    const seriennummer = document.getElementById('seriennummer').value;
    const prüfdatum = document.getElementById('prüfdatum').value;
    const prüfintervall = document.getElementById('prüfintervall').value;
    const nächstesPrüfdatum = document.getElementById('nächstes-prüfdatum').value;
    const prüfer = document.getElementById('prüfer').value;
    const ergebnisse = document.getElementById('ergebnisse').value;
    const firmaAdresse = document.getElementById('firma-adresse').value;
    const kundenAdresse = document.getElementById('kunden-adresse').value;

    // Überprüfung, ob alle Felder ausgefüllt sind
    if (!gerätName || !gerätTyp || !seriennummer || !prüfdatum || !prüfintervall || !nächstesPrüfdatum || !prüfer || !ergebnisse || !firmaAdresse || !kundenAdresse) {
        alert('Bitte fülle alle Felder aus!');
        return;
    }

    // Zeige den Download-Button nach dem Absenden des Formulars an
    document.getElementById('download-section').style.display = 'block';

    // PDF-Generierung mit jsPDF und Barcode
    document.getElementById('download-pdf').onclick = function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Setze Titel und Firmendaten
        doc.setFontSize(16);
        doc.text('DGUV3 Übergabeprotokoll', 20, 20);

        // Firma und Kundenadresse
        doc.setFontSize(12);
        doc.text(`Firma: ${firmaAdresse}`, 20, 40);
        doc.text(`Kunde: ${kundenAdresse}`, 20, 50);

        // Geräteeinzelheiten
        doc.setFontSize(14);
        doc.text(`Gerät Name: ${gerätName}`, 20, 70);
        doc.text(`Gerätetyp: ${gerätTyp}`, 20, 80);
        doc.text(`Seriennummer: ${seriennummer}`, 20, 90);
        doc.text(`Prüfdatum: ${prüfdatum}`, 20, 100);
        doc.text(`Prüfintervall: ${prüfintervall} Monate`, 20, 110);
        doc.text(`Nächstes Prüfdatum: ${nächstesPrüfdatum}`, 20, 120);
        doc.text(`Prüfer: ${prüfer}`, 20, 130);
        doc.text('Ergebnisse:', 20, 140);
        doc.text(ergebnisse, 20, 150);

        // Barcode hinzufügen (Gerät Name)
        const barcodeData = gerätName; // Barcode-Daten sind der Gerätname
        JsBarcode("#barcode", barcodeData, {
            format: "CODE128",
            width: 2,
            height: 40,
            displayValue: true,
            text: barcodeData
        });
        
        // Barcode in die PDF einfügen
        const barcodeUrl = "#barcode";
        doc.addImage(barcodeUrl, "PNG", 150, 70, 50, 20);

        // Unterschriftenfeld
        doc.setFontSize(12);
        doc.text('Unterschrift des Prüfers:', 20, 180);
        doc.setLineWidth(0.5);
        doc.line(20, 190, 180, 190); // Linie für die Unterschrift

        // PDF speichern
        doc.save(`${gerätName}_DGUV3_Prüfung.pdf`);
    };
});

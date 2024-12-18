// script.js
document.getElementById('dguv3-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const gerätName = document.getElementById('gerät-name').value;
    const prüfdatum = document.getElementById('prüfdatum').value;
    const prüfer = document.getElementById('prüfer').value;
    const ergebnisse = document.getElementById('ergebnisse').value;

    // Überprüfung, ob alle Felder ausgefüllt sind
    if (!gerätName || !prüfdatum || !prüfer || !ergebnisse) {
        alert('Bitte fülle alle Felder aus!');
        return;
    }

    // Zeige den Download-Button nach dem Absenden des Formulars an
    document.getElementById('download-section').style.display = 'block';

    // Funktion zum Erstellen der PDF
    document.getElementById('download-pdf').onclick = function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text('DGUV3 Prüfung - Nachweis', 20, 20);

        doc.setFontSize(12);
        doc.text(`Gerät Name: ${gerätName}`, 20, 40);
        doc.text(`Prüfdatum: ${prüfdatum}`, 20, 50);
        doc.text(`Prüfer: ${prüfer}`, 20, 60);
        doc.text('Ergebnisse:', 20, 70);
        doc.text(ergebnisse, 20, 80);

        // PDF herunterladen
        doc.save(`${gerätName}_DGUV3_Prüfung.pdf`);
    };
});

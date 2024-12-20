// script.js

document.getElementById('unfallForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Unfallmeldung erfolgreich gesendet!');
    // Hier könnte man die Daten per AJAX an den Server senden
});

function startRisikobewertung() {
    alert('Risikobewertung gestartet!');
    // Hier könnte die Risikobewertung mit einem weiteren Formular oder Berechnungen fortgesetzt werden
}

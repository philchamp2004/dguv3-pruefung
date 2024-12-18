// Funktion zum Formatieren von Text
function formatText(command) {
  document.execCommand(command, false, null);
}

// Funktion zum Einfügen von Listen (geordnet und ungeordnet)
function insertList(command) {
  document.execCommand(command, false, null);
}

// Funktion zum Speichern des Dokuments (in LocalStorage)
function saveDocument() {
  const content = document.getElementById('editor').innerHTML;
  localStorage.setItem('savedDocument', content);
  alert('Dokument gespeichert!');
}

// Funktion zum Laden des gespeicherten Dokuments
function loadDocument() {
  const savedContent = localStorage.getItem('savedDocument');
  if (savedContent) {
    document.getElementById('editor').innerHTML = savedContent;
  }
}

// Beim Laden der Seite gespeichertes Dokument laden
window.onload = loadDocument;

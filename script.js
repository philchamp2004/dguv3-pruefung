// script.js

// Array mit zufälligen Namen
const names = [
    "Max", "Lena", "Julia", "Felix", "Sophia", "Alexander", "Mia", "Benjamin", 
    "Nina", "Paul", "Marie", "Jonas", "Emilia", "David", "Hannah"
];

const generateBtn = document.getElementById('generateBtn');
const nameContainer = document.getElementById('nameContainer');

generateBtn.addEventListener('click', generateRandomName);

function generateRandomName() {
    // Zufälligen Namen auswählen
    const randomName = names[Math.floor(Math.random() * names.length)];

    // Element für den Namen erstellen
    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.innerText = randomName;

    // Den Namen zum Container hinzufügen
    nameContainer.appendChild(nameElement);

    // Animation anwenden: Namen fliegt von rechts nach links
    setTimeout(() => {
        nameContainer.removeChild(nameElement);  // Entfernt den Namen nach der Animation
    }, 2000);  // Zeit, die der Name in der Ansicht bleibt (2 Sekunden)
}

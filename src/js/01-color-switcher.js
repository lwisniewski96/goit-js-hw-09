const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let intervalId;
let isChangingColor = false;

startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);

function startChangingColor() {
  if (!isChangingColor) {
    // Sprawdzanie, czy zmiana kolorów nie jest już uruchomiona
    intervalId = setInterval(changeColor, 1000); // Uruchomienie interwału co 1 sekundę
    isChangingColor = true; // Ustawienie flagi zmiany kolorów
    startButton.disabled = true; // Wyłączenie przycisku "Start"
  }
}

function stopChangingColor() {
  clearInterval(intervalId); // Zatrzymanie interwału
  isChangingColor = false; // Zresetowanie flagi zmiany kolorów
  startButton.disabled = false; // Włączenie przycisku "Start"
}

function changeColor() {
  const randomColor = getRandomHexColor(); // Generowanie losowego koloru
  document.body.style.backgroundColor = randomColor; // Ustawienie koloru tła elementu <body>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Generowanie losowego koloru w formacie hexadecimal
}

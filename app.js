// Meva nomlari va ularning statik rasmlari
const fruits = [
    { name: "apple", image: "./img/apple.jpg" },
    { name: "banana", image: "./img/banana.jpg" },
    { name: "cherry", image: "./img/cherry.jpg" },
    { name: "grape", image: "./img/grape.jpg" },
    { name: "orange", image: "./img/orange.jpg" },
    { name: "pear", image: "./img/pear.jpg" },
    { name: "pineapple", image: "./img/pineapple.jpg" },
    { name: "kiwi", image: "./img/kiwi.jpg" },
    { name: "watermelon", image: "./img/watermelon.jpg" },
    { name: "mango", image: "./img/mango.jpg" },
    { name: "blueberry", image: "./img/blueberry.jpg" },
    { name: "strawberry", image: "./img/strawberry.jpg" },
    { name: "peach", image: "./img/peach.jpg" },
    { name: "plum", image: "./img/plum.jpg" },
    { name: "papaya", image: "./img/papaya.jpg" },
    { name: "apricot", image: "./img/apricot.jpg" },
    { name: "melon", image: "./img/melon.jpg" },
    { name: "fig", image: "./img/fig.jpg" },
    { name: "pomegranate", image: "./img/pomegranate.jpg" },
    { name: "coconut", image: "./img/coconut.jpg" },
    { name: "lime", image: "./img/lime.jpg" },
    { name: "lemon", image: "./img/lemon.jpg" },
    { name: "avocado", image: "./img/avocado.jpg" },
    { name: "quince", image: "./img/quince.jpg" },
    { name: "dragonfruit", image: "./img/dragonfruit.jpg" }
];  

// O'yin uchun o'zgaruvchilar
let currentFruitIndex = 0;
let timeLeft = 30;
let timerInterval;

// Elementlarni tanlash
const fruitImage = document.getElementById("fruit-image");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const timerElement = document.getElementById("time-left");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const restartBtn = document.getElementById("restart-btn");

// Randomly shuffle the fruits array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
}

// Shuffle fruits initially
shuffleArray(fruits);

// O'yinni boshlash
function startGame() {
    currentFruitIndex = 0;
    timeLeft = 30;
    updateFruit();
    startTimer();
}

// Meva va rasmni yangilash
function updateFruit() {
    fruitImage.src = fruits[currentFruitIndex].image;
    answerInput.value = "";
    answerInput.focus();
}

// Taymerni boshlash
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            endGame("Time's up! You lost!");
        }
    }, 1000);
}

// Javobni tekshirish
function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (userAnswer === fruits[currentFruitIndex].name) {
        if (currentFruitIndex < fruits.length - 1) {
            currentFruitIndex++;
            timeLeft = 30; // Vaqtni yangilash
            updateFruit();
        } else {
            endGame("Congratulations! You won!");
        }
    } else {
        endGame("Wrong answer! You lost!");
    }
}

// Submit tugmasi uchun listener
submitBtn.addEventListener("click", () => {
    checkAnswer();
});

// Enter tugmasi bosilganda javobni tekshirish
answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

// O'yinni tugatish
function endGame(message) {
    clearInterval(timerInterval);
    modalMessage.textContent = message;
    modal.style.display = "flex";
}

// O'yinni qayta boshlash
restartBtn.addEventListener("click", () => {
    modal.style.display = "none";
    startGame();
});

// O'yinni boshlash
startGame();
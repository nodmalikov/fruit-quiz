// Meva nomlari va ularning statik rasmlari
const fruits = [
    { name: "apple", image: "https://img.freepik.com/free-photo/green-apple-isolated-white_2829-9403.jpg?t=st=1736935923~exp=1736939523~hmac=fb24de28f3f9a265b2cd59c5c12a1b4e8d725d31fe89b597e33294f4d90275f3&w=826" },
    { name: "banana", image: "https://img.freepik.com/free-photo/fresh-yellow-banana_2829-13457.jpg?t=st=1736935939~exp=1736939539~hmac=30f76ee0dfa0ff3953e88bd0233355fdc07b09c8671a17c839f1589daf0e4c0f&w=996" },
    { name: "cherry", image: "https://img.freepik.com/free-photo/delicious-berries-table_144627-7028.jpg?t=st=1736935821~exp=1736939421~hmac=f3dcb1845c9c52ec30551eb1bd3bd4958b19c6c0744b76353409169ab2bedb78&w=826" },
    { name: "grape", image: "https://img.freepik.com/free-photo/fresh-green-grapes-isolated-white_167946-7.jpg?t=st=1736936050~exp=1736939650~hmac=5e9339e08b4445d652d0931dd6a1d59e6fa1afd8e22449ad0422597a17912be2&w=1380" },
    { name: "orange", image: "https://img.freepik.com/free-photo/orange-white-white_144627-16571.jpg?t=st=1736935934~exp=1736939534~hmac=d45fe604f425ddeba6c51b9400ff2b045bd79d54c8e8823c0a0c39d733d727e2&w=826" },
    { name: "pear", image: "https://img.freepik.com/free-vector/ripe-fresh-green-pear-vector_53876-114684.jpg?t=st=1736948138~exp=1736951738~hmac=809c887a06f1bc90a146930df6d8efaa7efe00526262b02f835ae84befc70d2c&w=826" },
    { name: "pineapple", image: "https://img.freepik.com/free-photo/pineapple_144627-22208.jpg?t=st=1736936288~exp=1736939888~hmac=f6e8c4ac14ab28121affb384ec15f77ab772a6a5deafb0143d8453f156d9addf&w=1380" },
    { name: "kiwi", image: "https://img.freepik.com/free-photo/fresh-kiwi-fruit-isolated_144627-30031.jpg?t=st=1736936315~exp=1736939915~hmac=ff05c2ce40389aa24e2fefb036270f81dd62fe4d3594db10602c4153fa0c195e&w=1380" },
    { name: "watermelon", image: "https://img.freepik.com/free-photo/green-striped-ripe-watermelon-with-slice-cross-section-isolated-white-background-with-copy-space-text-images-special-kind-berry-sweet-pink-flesh-with-black-seeds-side-view_639032-1254.jpg?t=st=1736936360~exp=1736939960~hmac=a996f614da38b7d2e29e83dc8b005881fb1bf59a8835d1dff2c4cbc2764df233&w=1380" },
    { name: "mango", image: "https://img.freepik.com/free-photo/mango-table_144627-16763.jpg?t=st=1736936489~exp=1736940089~hmac=c63c5e561a56228b5564111a43d495c967e2a43453b9be81f5624d878202629e&w=826" },
    { name: "blueberry", image: "https://img.freepik.com/free-vector/fresh-blueberries-with-water-drops-green-leaves-white-background-realistic-vector-illustration_1284-77363.jpg?t=st=1736939176~exp=1736942776~hmac=d5159e13aee4c775d20e092811e2293d2965d8a1df396cdbdda2aa8886e21171&w=996" },
    { name: "strawberry", image: "https://img.freepik.com/free-photo/closeup-shot-fresh-ripe-strawberries-isolated-white-surface_181624-54939.jpg?t=st=1736939251~exp=1736942851~hmac=50a3d99fa9f36b6e7506fbc88eddbe1a3700a92627e48d78c301ba1b6907d551&w=1380" },
    { name: "peach", image: "https://img.freepik.com/free-photo/peach-table_144627-17514.jpg?t=st=1736939282~exp=1736942882~hmac=bb38f368ce026f3515da12d2ae3280a84c02b06745fe250c0436ec422cf60ced&w=826" },
    { name: "plum", image: "https://img.freepik.com/free-photo/smooth-skinned-mellow-purple-plum-fruit-isolated-white-background-with-copy-space-text-images-clipping-path-side-view-close-up-shot_639032-1304.jpg?t=st=1736939332~exp=1736942932~hmac=8cbf7ca76fabeac6e709dcb224ba75f5ddb0c63ca82b2e89027baf7a97a18f8e&w=996" },
    { name: "papaya", image: "https://img.freepik.com/free-photo/fresh-papaya-fruit_144627-34201.jpg?t=st=1736939390~exp=1736942990~hmac=d86926cf6e1ec2416293d339b2054ab8dc447825b6bfe21c34d2f2d9a2b0b33c&w=1380" },
    { name: "apricot", image: "https://img.freepik.com/free-vector/realistic-fruits-composition-with-images-whole-sliced-apricot-fruit-blank-background-vector-illustration_1284-66028.jpg?t=st=1736939437~exp=1736943037~hmac=6ae0a29649c9b61e17f60adc76cfb9869f550146322aced1139509e9dda6d1c0&w=900" },
    { name: "melon", image: "https://img.freepik.com/free-photo/cantaloupe-melon_74190-1549.jpg?t=st=1736939528~exp=1736943128~hmac=101d82682e3c4ce363f5ea7f12c5325b20c379eb8397dc6328d8acb8ac0ed078&w=1380" },
    { name: "fig", image: "https://img.freepik.com/free-photo/fig-fruit_144627-17292.jpg?t=st=1736939573~exp=1736943173~hmac=0c30deed42d0315bcbf0a080662cbf3fb49e142657a3796d0f6b751f0a6470b4&w=826" },
    { name: "pomegranate", image: "https://img.freepik.com/free-photo/exotic-delicious-pomegranate-white-background_144627-12561.jpg?t=st=1736939611~exp=1736943211~hmac=8ef5fed9e7518cc791b57514a76b54705297597aabcbceda4d32b44648124ce8&w=1380" },
    { name: "coconut", image: "https://img.freepik.com/free-photo/fresh-coconut-mellow-delicious-perfect-cut-isolated-white_179666-474.jpg?t=st=1736939645~exp=1736943245~hmac=d02edf9e808676c076a62ec55e186e43e1d81a582beda97930a7a305559fd4ad&w=1380" },
    { name: "lime", image: "https://img.freepik.com/free-photo/fresh-lime-fruit-isolated_144627-30038.jpg?t=st=1736939710~exp=1736943310~hmac=27057b14ceb2e3a109f9313254f26228acc4c82cde101bc2cc0eacb97842af12&w=1380" },
    { name: "lemon", image: "https://img.freepik.com/free-photo/fresh-lemons-white-background_1203-1812.jpg?t=st=1736939752~exp=1736943352~hmac=b3916dba7bc34ab69540ab9ebedcb60cc660e1ac4f3c67b66632faa8653b6cf6&w=1380" },
    { name: "avocado", image: "https://img.freepik.com/free-photo/green-avocados_144627-43538.jpg?t=st=1736939835~exp=1736943435~hmac=e4733b79c149b45e4bf5aacf16f6d412fdfb60de91f188332d397b36badaa180&w=900" },
    { name: "tangerine", image: "https://img.freepik.com/free-photo/delicious-mandarin_144627-27555.jpg?t=st=1736939943~exp=1736943543~hmac=cb05a59a574f959983fb3a6b4dd7568571692293e385e9a572424a1fccd0f3bd&w=1380" },
    { name: "dragonfruit", image: "https://img.freepik.com/free-photo/dragon-s-eye-cut-isolated-white-background-slice-slose-up-copy-space_639032-2054.jpg?t=st=1736940787~exp=1736944387~hmac=4a0cb52d9b913dfdba8983c7db4e7d49af9c7688e8b5fd20909c9240cc51924d&w=1380" }
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
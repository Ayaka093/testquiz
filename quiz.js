const quizData = [
    {question: "Capital of France?", options: ["Paris", "Rome", "Berlin"], answer: "Paris", image: "assets/paris.jpg"},
    {question: "5 + 3 = ?", options: ["8", "9", "7"], answer: "8", image: "assets/math.jpg"},
    {question: "Primary Android language?", options: ["Java", "Swift", "Python"], answer: "Java", image: "assets/java.png"},
    {question: "Color of the sky?", options: ["Blue", "Green", "Red"], answer: "Blue", image: "assets/sky.jpg"},
    {question: "Fastest land animal?", options: ["Cheetah", "Lion", "Horse"], answer: "Cheetah", image: "assets/cheetah.jpg"},
    {question: "Largest ocean?", options: ["Pacific", "Atlantic", "Indian"], answer: "Pacific", image: "assets/ocean.jpg"},
    {question: "HTML stands for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Markup Language"], answer: "HyperText Markup Language", image: "assets/html.png"},
    {question: "React is a ...?", options: ["Library", "Language", "Database"], answer: "Library", image: "assets/react.png"},
    {question: "Square root of 81?", options: ["9", "8", "7"], answer: "9", image: "assets/square.jpg"},
    {question: "2 * 6 = ?", options: ["12", "10", "14"], answer: "12", image: "assets/multiply.jpg"},
    {question: "Which is a fruit?", options: ["Apple", "Carrot", "Lettuce"], answer: "Apple", image: "assets/apple.jpg"},
    {question: "Sun rises in?", options: ["East", "West", "North"], answer: "East", image: "assets/sunrise.jpg"},
    {question: "Planet closest to sun?", options: ["Mercury", "Venus", "Earth"], answer: "Mercury", image: "assets/mercury.jpg"},
    {question: "Python is a ...?", options: ["Language", "Snake", "Game"], answer: "Language", image: "assets/python.png"},
    {question: "RGB color model has?", options: ["3", "4", "2"], answer: "3", image: "assets/rgb.jpg"},
    {question: "Which is a bird?", options: ["Sparrow", "Dog", "Fish"], answer: "Sparrow", image: "assets/bird.jpg"},
    {question: "A triangle has how many sides?", options: ["3", "4", "5"], answer: "3", image: "assets/triangle.jpg"},
    {question: "Water freezes at?", options: ["0°C", "10°C", "5°C"], answer: "0°C", image: "assets/ice.jpg"},
    {question: "Main gas in air?", options: ["Nitrogen", "Oxygen", "CO2"], answer: "Nitrogen", image: "assets/air.jpg"},
    {question: "Earth is a ...?", options: ["Planet", "Star", "Moon"], answer: "Planet", image: "assets/earth.jpg"}
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const question = quizData[currentQuestionIndex];
        document.getElementById('question').textContent = question.question;
        const options = document.querySelectorAll('.option');
        options.forEach((btn, index) => {
            btn.textContent = question.options[index];
        });
        document.getElementById('quiz-image').src = question.image;
        document.getElementById('score').textContent = `Score: ${score}`;
    } else {
        showScore();
    }
}

function checkAnswer(index) {
    const selectedOption = document.querySelectorAll('.option')[index].textContent;
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showScore() {
    document.getElementById('quiz-container').innerHTML = `<div>Your final score: ${score} / ${quizData.length}</div>`;
}

loadQuestion();
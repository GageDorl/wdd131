const climbingHistory = [
    {
        fact:"Rock climbing began as a necessity for hunters and explorers but transitioned into a sport in the late 1800s. European climbers in the Alps and the UK’s Lake District started climbing for recreation, while in Fontainebleau, France, mountaineers trained on boulders without considering it a separate discipline.",
        imageURL: "./images/fact1.jpg"
    },
    {
        fact:"In the early 1900s, climbing gained popularity in places like Yosemite, the Dolomites, and the Peak District. Fontainebleau climbers refined bouldering techniques, though it was still seen as training rather than a sport.",
        imageURL: "./images/fact2-min.jpg"
    },
    {
        fact:"By the 30s and 50s, advances in climbing gear allowed climbers to push their limits. In the U.S., John Gill introduced gymnastics-based movement to bouldering, treating it as a discipline of strength and skill rather than preparation for larger climbs.",
        imageURL: "./images/fact3.jpg"
    },
    {
        fact:"In the 60s and 70s, Yosemite became a climbing hotspot with figures like Royal Robbins and Warren Harding pioneering big wall ascents. Bouldering grew in Fontainebleau and the U.S., but it remained a niche compared to traditional climbing.",
        imageURL: "./images/fact4.jpg"
    },
    {
        fact:"The 80s saw sport climbing rise, especially in France, where bolted routes encouraged a focus on difficulty. This led to an increase in climbing gyms. Bouldering also gained recognition, with more climbers treating it as a standalone pursuit.",
        imageURL: "./images/fact5.jpg"
    },
    {
        fact:"By the 90s and 2000s, climbing gyms became widespread, and competitions grew. Bouldering, led by climbers like Fred Nicole and Chris Sharma, reached new difficulty levels and solidified its place as a distinct discipline.",
        imageURL: "./images/fact6.jpg"
    },
    {
        fact:"The 2010s saw climbing explode into mainstream culture, with indoor gyms booming and outdoor climbing destinations drawing more enthusiasts. Bouldering competitions became as prestigious as lead climbing, and sport climbing debuted in the 2021 Tokyo Olympics.",
        imageURL: "./images/fact7-min.jpg"
    },
    {
        fact:"Today, both rock climbing and bouldering continue to evolve, with climbers pushing boundaries in difficulty, style, and accessibility.",
        imageURL: "./images/fact8.jpg"
    }
];

const fact = document.getElementById("history-fact");
const image = document.getElementById("history-image");

let index = 0;

const renderFact = (index) => {
    fact.textContent = climbingHistory[index].fact;
    image.src = climbingHistory[index].imageURL;
}

document.addEventListener("DOMContentLoaded", () => {
    renderFact(index);
});

const backButton = document.getElementById("left-arrow");
const nextButton = document.getElementById("right-arrow");

backButton.addEventListener("click", () => {
    index = (index - 1 + climbingHistory.length) % climbingHistory.length;
    renderFact(index);
});

nextButton.addEventListener("click", () => {
    index = (index + 1) % climbingHistory.length;
    renderFact(index);
});

const quiz = [
    {
        question: "What does the term “crux” refer to in rock climbing?",
        answers: [
            { answer: "The easiest part of the route", correct: false },
            { answer: "The hardest part of the route", correct: true },
            { answer: "The resting point on a climb", correct: false },
            { answer: "A type of climbing hold", correct: false }
        ]
    },
    {
        question: "Which famous climbing area is known for its big wall routes like El Capitan?",
        answers: [
            { answer: "Joshua Tree", correct: false },
            { answer: "Red River Gorge", correct: false },
            { answer: "Yosemite National Park", correct: true },
            { answer: "Fontainebleau", correct: false }
        ]
    },
    {
        question: "What is a “dyno” in climbing?",
        answers: [
            { answer: "A static balance move", correct: false },
            { answer: "A jump from one hold to another", correct: true },
            { answer: "A slow and controlled traverse", correct: false },
            { answer: "A climbing knot", correct: false }
        ]
    },
    {
        question: "In climbing terms, what is a “flash”?",
        answers: [
            { answer: "Climbing a route in complete darkness", correct: false },
            { answer: "Completing a route on the first try without falling, after getting some beta", correct: true },
            { answer: "Using only flashing holds on a problem", correct: false },
            { answer: "Falling off a climb due to poor footwork", correct: false }
        ]
    },
    {
        question: "What does “pumped” mean in climbing?",
        answers: [
            { answer: "Extremely excited after sending a route", correct: false },
            { answer: "When a climber's forearms are fatigued and swollen", correct: true },
            { answer: "Climbing with too much force", correct: false },
            { answer: "A method of securing climbing gear", correct: false }
        ]
    },
    {
        question: "Where is the world-famous bouldering destination Fontainebleau located?",
        answers: [
            { answer: "France", correct: true },
            { answer: "Italy", correct: false },
            { answer: "Switzerland", correct: false },
            { answer: "Spain", correct: false }
        ]
    },
    {
        question: "What is the name of the V-scale used to grade bouldering problems?",
        answers: [
            { answer: "Yosemite Decimal System", correct: false },
            { answer: "Font Scale", correct: false },
            { answer: "Hueco Scale", correct: true },
            { answer: "Alpine Scale", correct: false }
        ]
    },
    {
        question: "What type of crash pad is most commonly used for bouldering?",
        answers: [
            { answer: "Air-filled pad", correct: false },
            { answer: "Thick foam pad", correct: true },
            { answer: "Inflatable mattress", correct: false },
            { answer: "Rubberized mat", correct: false }
        ]
    },
    {
        question: "What is the main difference between bouldering and sport climbing?",
        answers: [
            { answer: "Bouldering is done on artificial walls only", correct: false },
            { answer: "Sport climbing required rope and harnesses, while bouldering is done on short climbs with crash pads", correct: true },
            { answer: "Bouldering is only done indoors", correct: false },
            { answer: "Sport climbing has more dangerous falls than bouldering", correct: false }
        ]
    },
    {
        question: "Who is widely credited with treating bouldering as a separate sport and introducing a grading system for it?",
        answers: [
            { answer: "Lynn Hill", correct: false },
            { answer: "Chris Sharma", correct: false },
            { answer: "John Gill", correct: true },
            { answer: "Tommmy Caldwell", correct: false }
        ]
    }
];

const quizContainer = document.querySelector("#quiz");
const startQuiz = document.querySelector("#start-quiz");

const quizFunction = () => {
    let score = 0;
    let currentQuestion = 0;
    const quizLength = quiz.length;

    quiz.sort(() => Math.random() - 0.5);

    const renderQuestion = (questionIndex) => {
        quizContainer.innerHTML = "";
        const question = document.createElement("h2");
        question.classList.add("question");
        question.textContent = quiz[questionIndex].question;
        quizContainer.appendChild(question);

        const answers = quiz[questionIndex].answers;

        answers.sort(() => Math.random() - 0.5);

        answers.forEach((answer, index) => {
            const answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.setAttribute("aria-label", "Answer choice");
            answerButton.textContent = answer.answer;
            answerButton.addEventListener("click", () => {
                if (answer.correct) {
                    score++;
                }
                currentQuestion++;
                if (currentQuestion < quizLength) {
                    renderQuestion(currentQuestion);
                } else {
                    quizContainer.innerHTML = "";
                    const scoreDisplay = document.createElement("h2");
                    scoreDisplay.textContent = `You got ${score} out of ${quizLength} questions correct! Wanna play again?`;

                    const restartButton = document.createElement("button");
                    restartButton.textContent = "Restart Quiz";
                    restartButton.classList.add("restart-button");
                    restartButton.addEventListener("click", () => quizFunction());
                    quizContainer.appendChild(scoreDisplay);
                    quizContainer.appendChild(restartButton);

                }
            });
            quizContainer.appendChild(answerButton);
        });
    };

    renderQuestion(currentQuestion);
}

startQuiz.addEventListener("click", () => quizFunction());
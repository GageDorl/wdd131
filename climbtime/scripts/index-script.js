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
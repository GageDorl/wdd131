const facts = [
    {
        name: "Jugs",
        description: "Jugs are the largest and most easily recognized climbing holds, offering a secure, full-hand grip and often serving as excellent resting points.  They are typically bucket-shaped and found on easier routes, though they can appear on harder climbs as well.",
        type: "holds"
    },
    {
        name: "Crimps",
        description: "Crimps are small, narrow holds that require climbers to grip with their fingertips, often using a \"closed crimp\" or \"half crimp\" hand position for maximum purchase. They demand significant finger strength and are common on more difficult routes.",
        type: "holds"
    },
    {
        name: "Slopers",
        description: "Slopers are rounded, featureless holds that offer little to no positive grip, requiring climbers to rely on friction and precise body positioning to maintain contact.  They demand significant core strength and are often considered technically challenging.",
        type: "holds"
    },
    {
        name: "Pinches",
        description: "Pinches are holds that require climbers to grip with their thumb and fingers, \"pinching\" them together, and they demand significant finger and thumb strength. They come in various widths and angles, presenting different levels of difficulty.",
        type: "holds"
    },
    {
        name: "Shoes",
        description: "Climbing shoes are specialized footwear designed for rock climbing, featuring a tight fit, sticky rubber soles for optimal grip, and often a downturned shape to enhance performance on overhanging routes. They prioritize precision and sensitivity to allow climbers to feel the rock and make the most of small holds.",
        type: "equipment"
    },
    {
        name: "Chalk",
        description: "Climbing chalk is a magnesium carbonate powder used by climbers to absorb sweat and improve grip on the rock, reducing slippage and enhancing friction for more secure holds.",
        type: "equipment"
    },
    {
        name: "Harness",
        description: "A climbing harness is a safety device worn around the waist and legs, designed to securely connect a climber to the rope, distributing the force of a fall and providing a safe anchor point for rappelling or belaying.",
        type: "equipment"
    },
    {
        name: "Rope",
        description: "Climbing ropes are dynamic ropes designed to absorb the impact of a fall, stretching slightly to reduce the force on the climber and belayer, or static ropes used for rappelling and other purposes where minimal stretch is desired.",
        type: "equipment"
    },
    {
        name: "Carabiners",
        description: "Carabiners are metal loops with a spring-loaded gate used in climbing to connect various pieces of equipment, such as ropes, harnesses, and belay devices, providing a secure and quick way to attach and detach components of the climbing system.",
        type: "equipment"
    },
    {
        name: "Belay Device",
        description: "A belay device is a mechanical device used by a belayer to control the rope and safely manage a climber's ascent or descent, providing friction to arrest a fall and smoothly lower the climber.  They come in various types, each with specific features for different climbing situations.",
        type: "equipment"
    },
    {
        name: "Quickdraws",
        description: "Quickdraws are pre-assembled units consisting of two carabiners connected by a short nylon sling, used in sport climbing to clip the rope into bolts on the rock face, allowing the climber to move upwards while maintaining a secure connection.",
        type: "equipment"
    },
    {
        name: "Back Clipping",
        description: "Back clipping is a dangerous climbing error where the rope is clipped into a quickdraw with the carabiner facing the wrong way.  This can cause the carabiner to unclip during a fall, leading to a potentially serious accident.  It's crucial for climbers to always double-check their clipping direction.",
        type: "leadMistakes"
    },
    {
        name: "Z-Clipping",
        description: "Z-clipping occurs when a climber accidentally clips their rope into a quickdraw using rope from below a previous clip, creating a \"Z\" shape in the rope. This can increase fall distance and rope drag, making the climb more dangerous and difficult.",
        type: "leadMistakes"
    },
    {
        name: "Back Stepping",
        description: "Back Stepping or stepping behind the rope while lead climbing, often due to poor foot placement or clipping, is a dangerous situation because a fall can cause the climber to flip upside down, increasing the risk of head injury.  This rope mismanagement emphasizes the importance of mindful movement and strategic clipping to maintain a safe rope position.",
        type: "leadMistakes"
    },
    {
        name: "Skipping Clips",
        description: "Skipping clips on lead climbs means failing to clip the rope through every available quickdraw, which significantly increases the potential fall distance and severity.",
        type: "leadMistakes"
    }
];

const infoSelector = document.querySelector("#info");
const infoContainer = document.querySelector("#info-container");

const displayInfo = facts => {
    const infoContainer = document.querySelector("#info-container");
    infoContainer.innerHTML = "";
    facts.map(fact => {
        const factDiv = document.createElement("div");
        factDiv.classList.add("fact-card");
        const factName = document.createElement("h1");
        factName.classList.add("fact-title");
        factName.textContent = fact.name;
        const factDescription = document.createElement("p");
        factDescription.textContent = fact.description;
        factDiv.appendChild(factName);
        factDiv.appendChild(factDescription);
        infoContainer.appendChild(factDiv);
    });
}

const setType = (event) => {
    type = event.target.value;
    if(type === "holds"){
        let holds = facts.filter(fact => fact.type === "holds");
        displayInfo(holds);
    } else if (type === "equipment"){
        let equipment = facts.filter(fact => fact.type === "equipment");
        displayInfo(equipment);
    } else if (type === "leadMistakes"){
        let leadMistakes = facts.filter(fact => fact.type === "leadMistakes");
        displayInfo(leadMistakes);
    } else {
        console.log("Invalid type selected");
    }
}

infoSelector.addEventListener("change", event => setType(event));

window.onload = () => {
    let holds = facts.filter(fact => fact.type === "holds");
    displayInfo(holds);
}
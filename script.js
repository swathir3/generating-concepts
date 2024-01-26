// script.js content
const prompts = [
    "Contemplate your place in the universe", 
    "Reflect on a moment of pure joy", 
    "Meditate on the nature of change",
    "Ponder the mysteries of the unseen world",
    "Consider the infinite possibilities of your path",
    "Explore the depths of your inner strength",
    "Seek the wisdom of your higher self"
];

const practices = [
    "breathing with the Ocean's Tide", 
    "walking in the Shadow of the Moon", 
    "embracing the Silence of the Stars",
    "following the Whisper of the Wind",
    "dancing under the Radiance of the Sun",
    "soaring with the Freedom of the Eagles",
    "listening to the Song of the Ancient Earth"
];

const creatures = [
    "feeling the spirit of the Phoenix of Renewal", 
    "experiencing the serenity of the Eternal Forest", 
    "reveling in the power of the Celestial Dragon of Wisdom",
    "embracing the courage of the Majestic Lion",
    "seeking the insight of the Wise Owl",
    "nurturing the love of the Gentle Deer",
    "discovering the secrets of the Mystic Unicorn"
];
const images = ["images/landscape.jpeg", "images/mirror.jpeg", "images/stardust.jpeg", "images/greenorb.jpeg", "images/bubble.jpeg", "images/ca.jpeg", "images/dragon.jpeg", "images/fairyforest.jpeg", "images/gold.jpeg", "images/manta.jpeg", "images/mirror.jpeg", "images/mist.jpeg", "images/mushroom.jpeg", "images/mysticaldragon.jpeg", "images/phoenix.jpeg", "images/souls.jpeg", "images/stardust.jpeg", "images/twins.jpeg"];

document.getElementById('generate-button').addEventListener('click', function() {
    const randomPromptIndex = Math.floor(Math.random() * prompts.length);
    const randomPracticeIndex = Math.floor(Math.random() * practices.length);
    const randomCreatureIndex = Math.floor(Math.random() * creatures.length);

    typeOutPhrase('.category-1', prompts[randomPromptIndex], function() {
        typeOutPhrase('.category-2', practices[randomPracticeIndex], function() {
            typeOutPhrase('.category-3', creatures[randomCreatureIndex], function() {
                updateMoodBoardImages();
            });
        });
    });
});

function typeOutPhrase(selector, text, callback) {
    let i = 0;
    const element = document.querySelector(selector);
    element.textContent = ''; // Clear the text content before typing
    const typing = setInterval(function() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            if (callback) callback(); // Proceed to the next phrase or update images
        }
    }, 50); // Typing speed
}

function updateMoodBoardImages() {
    const randomImageIndices = [];
    while (randomImageIndices.length < 3) {
        let r = Math.floor(Math.random() * images.length);
        if (randomImageIndices.indexOf(r) === -1) randomImageIndices.push(r);
    }

    document.getElementById('image1').src = images[randomImageIndices[0]];
    document.getElementById('image2').src = images[randomImageIndices[1]];
    document.getElementById('image3').src = images[randomImageIndices[2]];
}

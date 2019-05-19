// The list of characters to randomly choose from
const characters = {
    0: "Walter",
    1: "Jesse",
    2: "Gus",
    3: "Saul",
    4: "Mike"
}

// The list of pictures and quotes assigned to each character
const content = {
    Walter: {
        image: "img/walter.png",
        quotes: [
            "I am not in danger, Skyler. I am the danger.",
            "There is gold in the streets just waiting for someone to come and scoop it up.",
            "We’re done when I say we’re done",
            "Smoking marijuana, eating cheetos, and masturbating do not constitute plans in my book.",
            "If you don’t know who I am, then maybe your best course would be to tread lightly.",
            "I did it for me. I liked it. I was good at it. And, I was really…I was alive.",
            "Stay out of my territory.",
            "I'm not in the meth business. I'm in the empire business.",
            "Say my name.",
            "I did it for me. I liked it. I was good at it. And I was really ...I was alive."
        ]
    },
    Jesse: {
        image: "img/jesse.png",
        quotes: [
            "So you do have a plan! Yeah Mr. White! Yeah Science!",
            "Some straight like you, giant stick up his ass, age what, 60? He’s just gonna break bad?",
            "This is my own private domicile and I will not be harassed ...bitch!",
            "You're my free pass ...bitch.",
            "Say the words. Say you want this. Nothing happens until I hear you say it."
        ]
    },
    Gus: {
        image: "img/gus.png",
        quotes: [
            "I hide in plain sight, same as you.",
            "May his death satisfy you.",
            "I will kill your wife, I will kill your son, I will kill your infant daughter."
        ]
    },
    Saul: {
        image: "img/saul.png",
        quotes: [
            "Congratulations, you’ve just left your family a second-hand Subaru.",
            "I’m not saying it’s not bad. It’s bad. But it could be worse.",
            "You two suck at peddling meth."
        ]
    },
    Mike: {
        image: "img/mike.png",
        quotes: [
            "Shut the fuck up and let me die in peace",
            "Just because you shot Jesse James, don’t make you Jesse James.",
            "No more half-measures, Walter.",
            "You're not capable of being the guy. I had a guy, but now I don't. You ...are not the guy."
        ]
    },
}

// DOM elements set to constants
const introPage = document.getElementById("intro_page");
const actionPage = document.getElementById("action_page");
const soloButton = document.getElementById("solo_button");
const duoButton = document.getElementById("duo_button");
const gridOne = document.getElementById("grid_one");
const gridTwo = document.getElementById("grid_two");
const firstIcon1 = document.getElementById("first_1");
const firstIcon2 = document.getElementById("first_2");
const firstIcon3 = document.getElementById("first_3");
const firstIcon4 = document.getElementById("first_4");
const secondIcon1 = document.getElementById("second_1");
const secondIcon2 = document.getElementById("second_2");
const secondIcon3 = document.getElementById("second_3");
const secondIcon4 = document.getElementById("second_4");
const soloImage = document.getElementById("image");
const soloQuote = document.getElementById("quote");
const duoImageOne = document.getElementById("image_1");
const duoImageTwo = document.getElementById("image_2");
const duoQuoteOne = document.getElementById("quote_1");
const duoQuoteTwo = document.getElementById("quote_2");
const caption = document.getElementById("caption");

// Choose between 'monologue' and 'dialogue' quoting

function switchSoloDuo(mode) {
    const isSolo = mode === "solo";
    const activeForSolo = isSolo ? "active" : "inactive";
    const activeForDuo = isSolo ? "inactive" : "active";
    const inlineForSolo = isSolo ? "inline" : "none";
    const inlineForDuo = isSolo ? "none" : "inline";
    soloButton.src = "images/solo " + activeForSolo + " button.png";
    duoButton.src = "images/duo " + activeForDuo + " button.png";
    firstIcon1.style.display = inlineForSolo;
    secondIcon1.style.display = inlineForSolo;
    firstIcon2.style.display = inlineForDuo;
    secondIcon2.style.display = inlineForDuo;
    firstIcon3.style.display = inlineForSolo;
    secondIcon3.style.display = inlineForSolo;
    firstIcon4.style.display = inlineForDuo;
    secondIcon4.style.display = inlineForDuo;
}

// Hide intro page and show action page

let gridOneVisible;
let gridTwoVisible;

function changePage(mode) {
    const isSolo = mode === "solo";
    const inlineForSolo = isSolo ? "inline" : "none";
    const inlineBlockForDuo = isSolo ? "none" : "inline-block";
    gridOne.style.display = inlineForSolo;
    gridTwo.style.display = inlineBlockForDuo;
    introPage.style.display = "none";
    actionPage.style.display = "block";
    caption.style.display = "inline";
    gridOneVisible = isSolo ? true : false;
    gridTwoVisible = isSolo ? false : true;
}

// Display grid_one or grid_two

function showGridOne() {
    if (!gridOneVisible) {
        gridOne.style.display = "inline";
        gridTwo.style.display = "none";
        gridOneVisible = true;
        gridTwoVisible = false;
    }
    return null;
}

function showGridTwo() {
    if (!gridTwoVisible) {
        gridOne.style.display = "none";
        gridTwo.style.display = "inline-block";
        gridOneVisible = false;
        gridTwoVisible = true;
    }
    return null;
}

// Return a random number

function randomNum(num) {
    return Math.floor(Math.random() * num);
}

// Generate basic 'monologue' quote

function randomize() {
    const characterNum = randomNum(10);
    const character = characters[characterNum];
    const quoteListLength = content[character].quotes.length;
    const quoteNum = randomNum(quoteListLength);
    const quotation = content[character].quotes[quoteNum];
    const image = content[character].image;
    soloImage.src = image;
    soloImage.alt = "image of " + character;
    soloQuote.innerHTML = quotation;
}

// Generate mixed 'monologue' quote (random character to random quote)

function mix() {
    const characterNum = randomNum(10);
    const characterNum2 = randomNum(10);
    const character = characters[characterNum];
    const quotedCharacter = characters[characterNum2];
    const quoteListLength = content[quotedCharacter].quotes.length;
    const quoteNum = randomNum(quoteListLength);
    const quotation = content[quotedCharacter].quotes[quoteNum];
    const image = content[character].image;
    soloImage.src = image;
    soloImage.alt = "image of " + character;
    soloQuote.innerHTML = quotation;
}

// Generate basic 'dialogue' quote

function combine() {
    const characterNum = randomNum(10);
    const characterNum2 = randomNum(10);
    const characterOne = characters[characterNum];
    const characterTwo = characters[characterNum2];
    const quoteOneListLength = content[characterOne].quotes.length;
    const quoteTwoListLength = content[characterTwo].quotes.length;
    const quoteOneNum = randomNum(quoteOneListLength);
    const quoteTwoNum = randomNum(quoteTwoListLength);
    const quotationOne = content[characterOne].quotes[quoteOneNum];
    const quotationTwo = content[characterTwo].quotes[quoteTwoNum];
    const imageOne = content[characterOne].image;
    const imageTwo = content[characterTwo].image;
    if (characterOne != characterTwo) {
        duoImageOne.src = imageOne;
        duoImageOne.alt = "image of " + characterOne;
        duoQuoteOne.innerHTML = quotationOne;
        duoImageTwo.src = imageTwo;
        duoImageTwo.alt = "image of " + characterTwo;
        duoQuoteTwo.innerHTML = quotationTwo;
    } else {
        combine();
    }
}

// Generate mixed 'dialogue' quote (2 random characters to 2 random quotes)

function combineMix() {
    const characterNum = randomNum(10);
    const characterNum2 = randomNum(10);
    const characterNum3 = randomNum(10);
    const characterNum4 = randomNum(10);
    const characterOne = characters[characterNum];
    const characterTwo = characters[characterNum2];
    const quotedCharacterOne = characters[characterNum3];
    const quotedCharacterTwo = characters[characterNum4];
    const quoteOneListLength = content[quotedCharacterOne].quotes.length;
    const quoteTwoListLength = content[quotedCharacterTwo].quotes.length;
    const quoteOneNum = randomNum(quoteOneListLength);
    const quoteTwoNum = randomNum(quoteTwoListLength);
    const quotationOne = content[quotedCharacterOne].quotes[quoteOneNum];
    const quotationTwo = content[quotedCharacterTwo].quotes[quoteTwoNum];
    const imageOne = content[characterOne].image;
    const imageTwo = content[characterTwo].image;

    if (characterOne != characterTwo && quotedCharacterOne != quotedCharacterTwo) {
        duoImageOne.src = imageOne;
        duoImageOne.alt = "image of " + characterOne;
        duoQuoteOne.innerHTML = quotationOne;
        duoImageTwo.src = imageTwo;
        duoImageTwo.alt = "image of " + characterTwo;
        duoQuoteTwo.innerHTML = quotationTwo;
    } else {
        combine();
    }
}

// Functions added to click events

firstIcon1.addEventListener("click", function () {
    randomize();
    changePage("solo");
});
secondIcon1.addEventListener("click", function () {
    mix();
    changePage("solo");
});
firstIcon2.addEventListener("click", function () {
    combine();
    changePage("duo");
});
secondIcon2.addEventListener("click", function () {
    combineMix();
    changePage("duo");
});
firstIcon3.addEventListener("click", function () {
    randomize();
    showGridOne();
});
secondIcon3.addEventListener("click", function () {
    mix();
    showGridOne();
});
firstIcon4.addEventListener("click", function () {
    combine();
    showGridTwo();
});
secondIcon4.addEventListener("click", function () {
    combineMix();
    showGridTwo();
});
soloButton.addEventListener("click", function () {
    switchSoloDuo("solo")
});
duoButton.addEventListener("click", function () {
    switchSoloDuo("duo")
});
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
            "I am not in danger, I am the danger",
            "There is gold in the streets just waiting for someone to come and scoop it up",
            "We’re done when I say we’re done",
            "Smoking marijuana, eating cheetos, and masturbating do not constitute plans in my book",
            "If you don’t know who I am, then maybe your best course would be to tread lightly",
            "I did it for me. I liked it. I was good at it. And, I was really…I was alive",
        ]
    },
    Jesse: {
        image: "img/jesse.png",
        quotes: [
            "So you do have a plan yeah mr White yeah Science",
            "this is my own private domicile and I will not be harassed Bitch"
        ]
    },
    Gus: {
        image: "img/gus.png",
        quotes: [
            "I hide in plain sight same 3 you"
        ]
    },
    Saul: {
        image: "img/saul.png",
        quotes: [
            "Congratulations you just left your family a second hand Subaru",
            "Im not saying its not bad Its bad But it could be worse",
        ]
    },
    Mike: {
        image: "img/mike.png",
        quotes: [
            "Shut the fuck up and let me die in Peace",
            "just because you Shot jesse james dont make You jesse james"
        ]
    },
}

// DOM elements set to constants
const introPage = document.getElementById("intro_page");
const actionPage = document.getElementById("action_page");
const monoButton = document.getElementById("mono_button");
const stereoButton = document.getElementById("stereo_button");
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
const monoImage = document.getElementById("image");
const monoQuote = document.getElementById("quote");
const stereoImageOne = document.getElementById("image_1");
const stereoImageTwo = document.getElementById("image_2");
const stereoQuoteOne = document.getElementById("quote_1");
const stereoQuoteTwo = document.getElementById("quote_2");
const caption = document.getElementById("caption");

// Choose between 'monologue' and 'dialogue' quoting

function switchMonoStereo(mode) {
    const isMono = mode === "mono";
    const activeForMono = isMono ? "active" : "inactive";
    const activeForStereo = isMono ? "inactive" : "active";
    const inlineForMono = isMono ? "inline" : "none";
    const inlineForStereo = isMono ? "none" : "inline";
    monoButton.src = "images/mono " + activeForMono + " button.png";
    stereoButton.src = "images/stereo " + activeForStereo + " button.png";
    firstIcon1.style.display = inlineForMono;
    secondIcon1.style.display = inlineForMono;
    firstIcon2.style.display = inlineForStereo;
    secondIcon2.style.display = inlineForStereo;
    firstIcon3.style.display = inlineForMono;
    secondIcon3.style.display = inlineForMono;
    firstIcon4.style.display = inlineForStereo;
    secondIcon4.style.display = inlineForStereo;
}

// Hide intro page and show action page

let gridOneVisible;
let gridTwoVisible;

function changePage(mode) {
    const isMono = mode === "mono";
    const inlineForMono = isMono ? "inline" : "none";
    const inlineBlockForStereo = isMono ? "none" : "inline-block";
    gridOne.style.display = inlineForMono;
    gridTwo.style.display = inlineBlockForStereo;
    introPage.style.display = "none";
    actionPage.style.display = "block";
    caption.style.display = "inline";
    gridOneVisible = isMono ? true : false;
    gridTwoVisible = isMono ? false : true;
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
    monoImage.src = image;
    monoImage.alt = "image of " + character;
    monoQuote.innerHTML = quotation;
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
    monoImage.src = image;
    monoImage.alt = "image of " + character;
    monoQuote.innerHTML = quotation;
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
        stereoImageOne.src = imageOne;
        stereoImageOne.alt = "image of " + characterOne;
        stereoQuoteOne.innerHTML = quotationOne;
        stereoImageTwo.src = imageTwo;
        stereoImageTwo.alt = "image of " + characterTwo;
        stereoQuoteTwo.innerHTML = quotationTwo;
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
        stereoImageOne.src = imageOne;
        stereoImageOne.alt = "image of " + characterOne;
        stereoQuoteOne.innerHTML = quotationOne;
        stereoImageTwo.src = imageTwo;
        stereoImageTwo.alt = "image of " + characterTwo;
        stereoQuoteTwo.innerHTML = quotationTwo;
    } else {
        combine();
    }
}

// Functions added to click events

firstIcon1.addEventListener("click", function () {
    randomize();
    changePage("mono");
});
secondIcon1.addEventListener("click", function () {
    mix();
    changePage("mono");
});
firstIcon2.addEventListener("click", function () {
    combine();
    changePage("stereo");
});
secondIcon2.addEventListener("click", function () {
    combineMix();
    changePage("stereo");
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
monoButton.addEventListener("click", function () {
    switchMonoStereo("mono")
});
stereoButton.addEventListener("click", function () {
    switchMonoStereo("stereo")
});
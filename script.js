const messages = [
    "Are you sure?",
    "Really Pallu jiii😕??",
    "Ek or baar sochlo?☹️",
    "Cutie Pookie please...😢",
    "Apne tannu ji ke bare me to socho🥺!",
    "If you say no, I will be really sad...😫",
    "I will be very sad...😩",
    "Mera dil tut jayegaa...💔",
    "Please haa bol do naaa...😖",
    "Just kidding, maan jao na please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

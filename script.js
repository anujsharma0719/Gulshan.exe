const terminal = document.getElementById("terminal");

function addLine(text, delay) {

    setTimeout(function() {

        const line = document.createElement("p");

        line.textContent = text;

        terminal.appendChild(line);

    }, delay);
}


addLine("> INITIALIZING SYSTEM...", 500);

addLine("", 1200);

addLine("[SYSTEM] Booting personal kernel...       OK", 1700);

addLine("[SYSTEM] Loading modules...               OK", 2300);

addLine("[SYSTEM] Checking memory...               OK", 2900);

addLine("[SYSTEM] Initializing interfaces...       OK", 3500);

addLine("[SYSTEM] Mounting filesystem...           OK", 4100);

addLine("[SYSTEM] Starting core services...        OK", 4700);

addLine("[SYSTEM] Calibrating sensors...           OK", 5300);

addLine("[SYSTEM] System ready.                    OK", 5900);

setTimeout(function() {

    const progress = document.createElement("p");

    progress.textContent =
        "[SYSTEM] Initialization complete...   100%";

    terminal.appendChild(progress);

}, 6600);

const connectionPanel = document.getElementById("connectionPanel");
const progressBar = document.getElementById("progressBar");
const connectionPercent = document.getElementById("connectionPercent");
const connectionStatus = document.getElementById("connectionStatus");


setTimeout(function() {

    connectionPanel.style.display = "block";

}, 7200);


let progress = 0;

setTimeout(function() {

    const progressInterval = setInterval(function() {

        progress++;

        progressBar.style.width = progress + "%";
        connectionPercent.textContent = progress + "%";

        if (progress >= 78) {

            clearInterval(progressInterval);

            connectionStatus.textContent = "SECURE ✓";

        }

    }, 45);

}, 7600);
const userPanel = document.getElementById("userPanel");

setTimeout(function() {

    userPanel.style.display = "block";

}, 11700);
/* =========================
   CONFESSION CARD SYSTEM
========================= */

const confessionSection =
    document.getElementById("confessionSection");

const confessionCard =
    document.getElementById("confessionCard");

const cardNumber =
    document.getElementById("cardNumber");

const cardTitle =
    document.getElementById("cardTitle");

const cardContent =
    document.getElementById("cardContent");

const cardCounter =
    document.getElementById("cardCounter");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");


const confessionCards = [

    {
        number: "FILE #001",
        title: "HOW WE MET",
        content: "[ WRITE YOUR STORY HERE ]"
    },

    {
        number: "FILE #002",
        title: "THE FIRST IMPRESSION",
        content: "[ WRITE YOUR STORY HERE ]"
    },

    {
        number: "FILE #003",
        title: "WHEN I STARTED LIKING YOU",
        content: "[ WRITE YOUR STORY HERE ]"
    },

    {
        number: "FILE #004",
        title: "WHAT I LIKE ABOUT YOU",
        content: "[ WRITE YOUR STORY HERE ]"
    },

    {
        number: "FILE #005",
        title: "WHY YOU ARE IMPORTANT",
        content: "[ WRITE YOUR STORY HERE ]"
    },

    {
        number: "FILE #006",
        title: "ONE LAST THING...",
        content: "[ WRITE YOUR STORY HERE ]"
    }

];


let currentCard = 0;

let cardLocked = false;


/* SHOW CONFESSION */

/* =========================
   HACKER PAGE → CONFESSION
========================= */

setTimeout(function() {

    const countdown = document.createElement("div");

    countdown.id = "countdown";

    countdown.textContent = "5";

    document.body.appendChild(countdown);

    let number = 5;

    const countdownInterval = setInterval(function() {

        number--;

        if (number > 0) {

            countdown.textContent = number;

        } else {

            clearInterval(countdownInterval);

            countdown.textContent = "ACCESS GRANTED ✓";

            setTimeout(function() {

                document.body.style.transition =
                    "opacity 1s ease";

                document.body.style.opacity = "0";

                setTimeout(function() {

                    document.querySelector(".header").style.display = "none";
                    document.querySelector(".terminal").style.display = "none";
                    document.querySelector(".connection-panel").style.display = "none";
                    document.querySelector(".user-panel").style.display = "none";

                    confessionSection.style.display = "block";

                    document.body.style.opacity = "1";

                    countdown.remove();

                }, 1000);

            }, 800);

        }

    }, 1000);

}, 18500);

/* UPDATE CARD */

function updateCard(direction) {

    if (cardLocked) {
        return;
    }

    cardLocked = true;


    confessionCard.classList.remove(
        "card-next",
        "card-prev"
    );


    void confessionCard.offsetWidth;


    const card = confessionCards[currentCard];


    cardNumber.textContent = card.number;

    cardTitle.textContent = card.title;

    cardContent.textContent = card.content;

    cardCounter.textContent =
        (currentCard + 1) +
        " / " +
        confessionCards.length;


    if (direction === "next") {

        confessionCard.classList.add("card-next");

    } else {

        confessionCard.classList.add("card-prev");

    }


    setTimeout(function() {

        cardLocked = false;

    }, 400);

}


/* NEXT */

function nextCard() {

    if (currentCard >= confessionCards.length - 1) {
        return;
    }

    currentCard++;

    updateCard("next");

}


/* PREVIOUS */

function previousCard() {

    if (currentCard <= 0) {
        return;
    }

    currentCard--;

    updateCard("prev");

}


/* BUTTONS */

nextBtn.addEventListener(
    "click",
    nextCard
);

prevBtn.addEventListener(
    "click",
    previousCard
);


/* KEYBOARD */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "ArrowRight") {

            nextCard();

        }

        if (event.key === "ArrowLeft") {

            previousCard();

        }

    }
);


/* =========================
   TOUCH SWIPE
========================= */

let touchStartX = 0;
let touchEndX = 0;

confessionCard.addEventListener(
    "touchstart",
    function(event) {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


confessionCard.addEventListener(
    "touchend",
    function(event) {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    },
    { passive: true }
);


function handleSwipe() {

    const swipeDistance =
        touchEndX - touchStartX;


    const minimumSwipe = 60;


    if (
        Math.abs(swipeDistance)
        < minimumSwipe
    ) {

        return;

    }


    if (swipeDistance < 0) {

        nextCard();

    } else {

        previousCard();

    }

}

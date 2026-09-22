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
        content: `If I think about it, I had seen you so many times before.

I had even met you a few times.

But back then, you were just an ordinary girl to me — someone I saw, but never really thought much about.

But then came 30th August 2026.

That day, when I saw you again, you honestly seemed pretty normal to me.

Sorry, but it’s true. 😂

But…

Little did I know that this time, something was about to change.`
    },

    {
        number: "FILE #002",
        title: "THE FIRST IMPRESSION",
        content: `When we met at that gathering, I remember feeling really shy.

I’m an introvert, so naturally, I didn’t really know how to respond.

But you were completely different.

You talked to me, my brother, and my bhabhi with so much confidence and ease. You were so comfortable talking to everyone that, honestly, I found it a little difficult to keep up with you. 😂

I didn’t really know what to say or how to reply.

But somewhere in that conversation, something started.

I became attracted to you.

It wasn’t love at first sight. Not even close.

I was simply interested in you. I wanted to know more about this girl who had suddenly caught my attention.

And honestly, my very first thought was…

“Kitna bolti hai ye ladki.” 😂❤️`
    },

    {
        number: "FILE #003",
        title: "WHEN I STARTED LIKING YOU",
        content: `This one is a little complicated.

I remember when we were about to leave and you kept insisting that we stay at the gathering a little longer. Honestly, I found that really cute.

But if you ask me when I actually started liking you… I think it might sound a little strange or even weird.

You know I’m an introvert.

And yes, I was the one who first put my hand forward for a handshake. 😂

But then, for some reason, I suddenly pulled my hand back.

And when you reached out and held my hand anyway…

I felt something.

I still wouldn’t call it love.

I didn’t even know what that feeling was.

But there was definitely something special about that moment.

After the gathering, I found your Instagram.

And honestly, sending you a request felt harder than it should have. 😂

But I somehow gathered the courage, put my shyness aside, and sent it.

Then we started talking.

And the more I got to know you, the more I realized that I had never really met someone quite like you.

Somewhere along the way, you stopped being just someone I was interested in…

You started becoming someone I could see as my special one. ❤️`
    },

    {
        number: "FILE #004",
        title: "WHAT I LIKE ABOUT YOU",
        content: `There are so many things I like about you that I honestly don’t know where to begin.

The first thing that stands out to me is how courageous and confident you are. You carry yourself with so much confidence, and honestly, sometimes I just think, I wish I could be a little more like you.

You’re caring.

You’re sweet.

And then there’s this other side of you that I find really cute — you’re shy too.

I still remember how, at first, you would just like my stories instead of actually messaging me.

Well… I did the exact same thing. 😂

So I guess we were both a little shy in our own ways.

And honestly, I found that side of you really cute.

Wese toh tum bahut bolti ho… 😂

But what I really appreciate is that you’re also a really good listener.

You listen when I talk.

You listen to my problems.

You make me feel heard.

And I think that’s one of the things I appreciate about you the most.

You’re special to me in more ways than I can put into words. ❤️`
    },

    {
        number: "FILE #005",
        title: "WHY YOU ARE IMPORTANT",
        content: `I honestly don’t know how to explain this one.

I don’t know why.

I don’t know how.

I don’t even know what words could possibly describe it.

I just know that…

you are.

You are important to me.

You just are.

Maybe I don’t have a perfect explanation for it, and maybe I never will.

But somewhere between all those conversations, little moments, and getting to know you…

you became someone who matters to me. ❤️`
    },

    {
        number: "FILE #006",
        title: "ONE LAST THING...",
        content: `You’re genuinely such a good and beautiful person, and whatever decision you make, I’ll respect it. ❤️

You can say yes.

You can also say… yes.

And honestly, why would you even say no to me?

Do you have any idea how much time it took me to make all of this for you? 😭😂

So please, just listen to your heart…

And maybe also consider the amount of coding effort involved here.

I mean, rejecting me after all this would be slightly disrespectful to the developer. 😂

But jokes apart, whatever you decide, I’ll respect it.

So… be practical.

Be kind.

Be a little kind to me too. 🥹

Now go to the next page…

And make your decision there. ❤️`
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

    if (cardLocked) {
        return;
    }

    if (currentCard >= confessionCards.length - 1) {

        openProposal();

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

/* =========================
   FINAL PROPOSAL
========================= */

const proposalSection =
    document.getElementById("proposalSection");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");


function openProposal() {

    cardLocked = true;

    confessionSection.style.transition =
        "opacity 1s ease, transform 1s ease";

    confessionSection.style.opacity = "0";

    confessionSection.style.transform =
        "scale(0.96)";

    setTimeout(function() {

        confessionSection.style.display = "none";

        proposalSection.style.display = "flex";

        window.scrollTo(0, 0);

    }, 1000);

}


/* YES */

yesButton.addEventListener(
    "click",
    function() {

        proposalSection.innerHTML = `

            <div class="proposal-heart">
                ❤️
            </div>

            <div class="proposal-name">
                SHE SAID YES.
            </div>

            <div class="proposal-text">

                Okay...
                <br><br>
                I think my heart just stopped for a second. 😭❤️

                <br><br>

                Then it's officially a date.

            </div>

            <div class="proposal-heart">
                🥹❤️
            </div>

        `;

    }
);

let noAttempts = 0;

noButton.addEventListener(
    "click",
    function() {

        noAttempts++;

        if (noAttempts === 1) {

            noButton.textContent =
                "ARE YOU SURE? 😭";

        }

        else if (noAttempts === 2) {

            noButton.textContent =
                "REALLY? 🥺";

        }

        else if (noAttempts === 3) {

            noButton.textContent =
                "OKAY... 😭";

        }

        else {

            proposalSection.innerHTML = `

                <div class="proposal-heart">
                    ❤️
                </div>

                <div class="proposal-name">
                    I UNDERSTAND.
                </div>

                <div class="proposal-text">

                    I’ll respect your decision.

                    <br><br>

                    But you really made me code
                    all of this just to say no? 😭😂

                </div>

            `;

        }

    }
);

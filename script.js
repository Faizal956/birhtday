// ================================
// SECTION NAVIGATION
// ================================

const sections = [
    "opening",
    "birthday",
    "certificate",
    "stats",
    "hopes",
    "message",
    "quiz",
    "final"
];

function nextSection(id) {
    document.querySelectorAll(".screen").forEach(section => {
        section.classList.remove("active");
    });

    const next = document.getElementById(id);

    if (next) {
        next.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


// ================================
// OPENING GIFT
// ================================

function openGift() {

    const gift = document.getElementById("gift");

    gift.classList.add("opened");

    createConfetti(80);

    setTimeout(() => {
        nextSection("birthday");
    }, 700);
}


// ================================
// FINAL GIFT
// ================================

function finalSurprise() {

    const gift = document.getElementById("finalGift");
    const message = document.getElementById("finalMessage");

    gift.classList.add("opened");

    createConfetti(150);

    setTimeout(() => {

        message.classList.remove("hidden");

        // Extra celebration
        createConfetti(100);

    }, 700);
}


// ================================
// QUIZ
// ================================

function answer(option) {

    const result = document.getElementById("quiz-result");

    if (option === 0) {

        result.innerHTML =
            "😂 Correct! You actually know me.";

        result.style.color = "#6b4aa1";

    } else {

        result.innerHTML =
            "😭 Wrong! Bro seriously?";

        result.style.color = "#c94c5c";
    }

}


// ================================
// CONFETTI
// ================================

function createConfetti(amount) {

    for (let i = 0; i < amount; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["🎉", "✨", "💗", "⭐", "🎀", "♡"][
            Math.floor(Math.random() * 6)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize =
            Math.random() * 18 + 12 + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 2500 + 2000;

        const rotation =
            Math.random() * 720 - 360;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${rotation}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "cubic-bezier(.2,.7,.3,1)"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}


// ================================
// CLICK ANYWHERE = LITTLE SPARK
// ================================

document.addEventListener("click", function (event) {

    const spark = document.createElement("span");

    spark.innerHTML = "✦";

    spark.style.position = "fixed";
    spark.style.left = event.clientX + "px";
    spark.style.top = event.clientY + "px";
    spark.style.pointerEvents = "none";
    spark.style.zIndex = "10000";
    spark.style.fontSize = "20px";

    document.body.appendChild(spark);

    spark.animate(
        [
            {
                transform: "scale(0)",
                opacity: 1
            },
            {
                transform: "translateY(-35px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 600,
            easing: "ease-out"
        }
    );

    setTimeout(() => spark.remove(), 600);

});
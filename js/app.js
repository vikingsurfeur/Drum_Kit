// VARIABLES

const drums = new Howl({
    src: ["./audio/drums.webm", "./audio/drums.mp3"],
    sprite: {
        clap: [0, 1365.578231292517],
        closed_hi_hat: [3000, 961.6326530612245],
        crash: [5000, 7569.750566893424],
        kick: [14000, 1375.9863945578238],
        open_hi_hat: [17000, 1061.9501133786855],
        snare: [20000, 1260.2947845804983],
    },
});

const pad   = document.querySelectorAll('.pad'),
    drumkit = document.querySelector(".drumkit");

// CHOOSE DRUM PAD COLOR

do {
    var padColor = Number(prompt('Hey There! Choose your color Pad Buddy \n\n 1 - The Blue Pad \n\n 2 - The Orange Pad \n\n 3 - The Green Pad'));
} while (padColor != 1 && padColor != 2 && padColor != 3);

// FUNCTION PAD COLOR 

function padColoring(padColor) {
    if (padColor === 1) {
        pad.forEach(button => {
            button.classList.add('pad--blue');
        });
    }
    else if (padColor === 2) {
        pad.forEach(button => {
            button.classList.add('pad--orange');
        });
    } else {
        pad.forEach(button => {
            button.classList.add('pad--green');
        });
    }
}

padColoring(padColor);

// LISTENERS

drumkit.addEventListener("touchstart", (e) => {
    if (e.target.classList.contains("pad")) {
        let soundToPlay = e.target.dataset.sound;
        drums.play(soundToPlay);
    }
});

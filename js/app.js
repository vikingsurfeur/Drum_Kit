// VARIABLES

const drumKitAcoustic = new Howl({
    src: ["./audio/acoustic/drums.webm", "./audio/acoustic/drums.mp3"],
    sprite: {
        clap: [0, 1365.578231292517],
        closed_hi_hat: [3000, 961.6326530612245],
        crash: [5000, 7569.750566893424],
        kick: [14000, 1375.9863945578238],
        open_hi_hat: [17000, 1061.9501133786855],
        snare: [20000, 1260.2947845804983],
    },
});

const drumKitElectronic = new Howl({
    src: ["./audio/electronic/drums.webm", "./audio/electronic/drums.mp3"],
    sprite: {
        clap: [0, 272.1995464852608],
        closed_hi_hat: [2000,139.31972789115665],
        crash: [4000, 42.448979591836355],
        kick: [6000, 431.4285714285715],
        open_hi_hat: [8000, 156.73469387755114],
        snare: [ 10000, 109.56916099773295],
    },
});


const pad   = document.querySelectorAll('.pad'),
    drumkit = document.querySelector(".drumkit");

// CHOOSE DRUM PAD COLOR

do {
    var padColor = Number(prompt('Hey There! Choose your color Pad Buddy\n\n 1 - The Blue Pad\n\n 2 - The Orange Pad\n\n 3 - The Green Pad\n\n'));
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

// CHOOSE YOUR DRUM KIT

do {
    var drumBank = Number(prompt('Ok! Well... \n\n Now, it\'s time to choose a drum kit !\n\n 1 - An Acoustic Drum Kit\n\n 2 - An Electric Drum Kit'));
} while (drumBank != 1 && drumBank != 2);

// FUNCTION DRUM KIT

function addDrumBank(drumBank) {
    if (drumBank === 1) {
        drumkit.addEventListener("touchstart", (e) => {
            if (e.target.classList.contains("pad")) {
                e.preventDefault();
                let soundToPlay = e.target.dataset.sound;
                drumKitAcoustic.play(soundToPlay);
            }
        });
    } else {
        drumkit.addEventListener("touchstart", (e) => {
            if (e.target.classList.contains("pad")) {
                e.preventDefault();
                let soundToPlay = e.target.dataset.sound;
                drumKitElectronic.play(soundToPlay);
            }
        });
    }
}

addDrumBank(drumBank);



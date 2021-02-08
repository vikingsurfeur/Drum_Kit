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

drums.play('kick');
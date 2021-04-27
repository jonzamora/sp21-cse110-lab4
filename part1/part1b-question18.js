function timePerSecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(timePerSecond, 1000);
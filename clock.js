const clock = document.getElementById("clock");

function setDate() {
    const now = new Date();
    const secondsAngle = now.getSeconds() * 6;
    const minsAngle = now.getMinutes() * 6 + secondsAngle / 60;
    const hourAngle = ((now.getHours() % 12) / 12) * 360 + minsAngle / 12;
}



setInterval(setDate, 1000);

setDate();
const clock = document.getElementById("clock");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds() * 6;
    const mins = now.getMinutes() * 6 + seconds / 60;
    const hour = ((now.getHours() % 12) / 12) * 360 + mins / 12;
}



setInterval(setDate, 1000);

setDate();
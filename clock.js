const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setClock() {
    const now = new Date();
    const argentinaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Argentina/Buenos_Aires"}));

    const seconds = argentinaTime.getSeconds();
    const secsDeg = (seconds * (360 / 60)) + 90;
    secondHand.style.transform = `rotate(${secsDeg}deg)`;

    const minutes = argentinaTime.getMinutes();
    const minsDeg = (minutes * (360 / 60)) + ((seconds / 60) * (360 / 60)) + 90;
    minuteHand.style.transform = `rotate(${minsDeg}deg)`;

    const hours = argentinaTime.getHours() > 12 ? argentinaTime.getHours() - 12 : argentinaTime.getHours();
    const hrsDeg = (hours * (360 / 12)) + ((minutes / 60) * (360 / 12)) + ((seconds / 60) * (360 / 12)) + 90;
    hourHand.style.transform = `rotate(${hrsDeg}deg)`;
}

setInterval(setClock, 1000);

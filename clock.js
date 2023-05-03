const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setClock() {
    const now = new Date();
    //const argentinaTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Argentina/Buenos_Aires"}));
    
    const seconds = now.getSeconds();
    const secsDeg = seconds * (360 / 60);
    secondHand.style.transform = `rotate(${secsDeg}deg)`;

    const minutes = now.getMinutes();
    const minsDeg = minutes * (360 / 60) + (seconds * (360 / 60) / 360);
    minuteHand.style.transform = `rotate(${minsDeg}deg)`;

    const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const hrsDeg = hours * (360 / 12) + (minutes * (360 / 60) / 360 ) + (seconds * (360 / 60) / 360);
    hourHand.style.transform = `rotate(${hrsDeg}deg)`;
}

setInterval(setClock, 1000);

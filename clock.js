const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secsDeg}deg)`;

    const minutes = now.getMinutes();
    const minsDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minsDeg}deg)`;

    const hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    const hrsDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hrsDeg}deg)`;
}

setInterval(setClock, 1000);

/* 
<div class="clock">
    <div class="center"></div>
    <div class="second"></div>
    <div class="minute"></div>
    <div class="hour"></div>
    <span class="mark top"></span>
    <span class="mark bottom"></span>
    <span class="mark left"></span>
    <span class="mark right"></span>
</div>
*/

const renderClock = () => {
    const clockRoot = document.createElement('div');
    clockRoot.classList.add('clock');

    const centerElement = document.createElement('div');
    centerElement.classList.add('center');

    const secondElement = document.createElement('div');
    secondElement.classList.add('second');

    const minuteElement = document.createElement('div');
    minuteElement.classList.add('minute');

    const hourElement = document.createElement('div');
    hourElement.classList.add('hour');

    const markTopElement = document.createElement('div');
    markTopElement.classList.add('mark');
    markTopElement.classList.add('top');

    const markBottomElement = document.createElement('div');
    markBottomElement.classList.add('mark');
    markBottomElement.classList.add('bottom');

    const markLeftElement = document.createElement('div');
    markLeftElement.classList.add('mark');
    markLeftElement.classList.add('left');

    const markRightElement = document.createElement('div');
    markRightElement.classList.add('mark');
    markRightElement.classList.add('right');

    clockRoot.appendChild(centerElement);
    clockRoot.appendChild(secondElement);
    clockRoot.appendChild(minuteElement);
    clockRoot.appendChild(hourElement);
    clockRoot.appendChild(markTopElement);
    clockRoot.appendChild(markRightElement);
    clockRoot.appendChild(markBottomElement);
    clockRoot.appendChild(markLeftElement);

    document.getElementById('app').appendChild(clockRoot);
}

renderClock();

setInterval(function() {
    const date = new Date();
    const hour = date.getHours() % 12;
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const hourAng = hour*30 + (minute/60) * 30 + (second/3600)*30;
    const minuteAng = minute * 6 + (second/60)*6;
    const secondAng = second*6;

    const secondElement = document.querySelector(".second");
    const minuteElement = document.querySelector(".minute");
    const hourElement = document.querySelector(".hour");

    secondElement.style.transform = `translateY(-50%) rotate(${secondAng}deg)`
    minuteElement.style.transform = `translateY(-50%) rotate(${minuteAng}deg)`
    hourElement.style.transform = `translateY(-50%) rotate(${hourAng}deg)`
}, 1000)
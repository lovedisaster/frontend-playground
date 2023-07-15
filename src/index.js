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


const fetchData = () => {
    const data = fetch("https://dummyjson.com/todos?limit=10&skip=80");
    data.then((response) => {
        response.json().then(data => {
            console.log(data);
        })
    }).catch(e => {
        console.log(`Error ${e.message}`)
    })
}

fetchData();
const hour = document.getElementById('hour');
const points1 = document.getElementById('points1');
const minute = document.getElementById('minute');
const points2 = document.getElementById('points2');
const second = document.getElementById('second');
setInterval(() => {
    const date = new Date();
    hour.innerText = date.getHours();
    points1.innerText = ":";
    minute.innerText = date.getMinutes();
    points2.innerText = ":";
    setTimeout(() => {
        points1.innerText = "";
        points2.innerText = "";
    }, 500);
    second.innerText = date.getSeconds();
}, 1000);
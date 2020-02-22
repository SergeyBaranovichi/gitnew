const s = Number(prompt("Введите число секунд"));
const hour = Math.floor(s / 3600);
const a = s % 3600;
const min = Math.floor(a / 60);
const sec = a % 60;
alert(hour + "ч:" + min + "м:" + sec + "с");
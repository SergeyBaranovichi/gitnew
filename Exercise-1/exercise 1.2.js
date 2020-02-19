const a = Number(prompt("Введите 1-е число"));
const b = Number(prompt("Введите 2-е число"));
const c = Number(prompt("Введите 3-е число"));
alert (((a < b + c) && (b < a + c) && (c < a + b)) ? "да" : "нет");
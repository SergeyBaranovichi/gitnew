const a = Number(prompt("Введите сторону a"));
const b = Number(prompt("Введите сторону b"));
const c = Number(prompt("Введите сторону c"));
const check = ((a < b + c) && (b < a + c) && (c < a + b)) ? 1 : 0;
if (check === 1){
	const p = (a+b+c)/2;
	alert("Площадь = " + (p * (p - a) * (p - b) * (p - c)) ** (1/2));
  } else alert ("Нет такого треугольника");
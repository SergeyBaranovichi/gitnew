const num1 = Number(prompt("Введите 1-е число"));
const znak = prompt("Введите знак");
const num2 = Number(prompt("Введите 2-е число"));
let rez = 0;
switch (znak) {
  case "+":
    rez = num1 + num2;
    break;
  case "-":
    rez = num1 - num2;
    break;
  case "*":
    rez = num1 * num2;
    break;
  case "/":
    rez = num1 / num2;
    break;
}
alert(num1 + znak + num2 + "=" + rez);
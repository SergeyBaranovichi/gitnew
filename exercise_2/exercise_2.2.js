const num = Number(prompt("Введите число"));
let i = 2;
let k = 0;
while (i <= num / 2) {
  if (num % i === 0) {
    k = 1;
    break;
  }
  i++;
}
alert(k === 1 ? "составное" : "простое");
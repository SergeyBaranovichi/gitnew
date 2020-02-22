const x = Number(prompt("Введите x"));
const n = Number(prompt("Введите N"));
let sum = 1;
let f = 1;
for (let i = 1; i < n; i++) {
  f = f * i;
  sum = sum + (x ** i) / f;
}
alert(sum);
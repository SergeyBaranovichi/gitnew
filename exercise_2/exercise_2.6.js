const n = Number(prompt("Введите число"));
let k = 1;
let l = 1;
for (let i = 1; i < n - 1; i++) {
  k = k + l;
  l = k - l;
}
alert(n + "-е число Фибоначчи: " + k);
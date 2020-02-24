const str = prompt("Введите строку");
const s = str.split(" ");
let k = "";
for (let i = 0; i < s.length; i++) {
  if (s[i].length > k.length) {
    k = s[i];
  }
}
alert(k);
const longStr = k.toLowerCase();
let count = 0;
for (let i = 0; i < longStr.length; i++) {
  switch (longStr[i]) {
    case "e":
    case "y":
    case "u":
    case "i":
    case "o":
    case "a":
      count++;
      break;
  }
}
alert(count);
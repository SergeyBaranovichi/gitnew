const s = prompt("Введите строку");
let i = 0;
let count1 = 0,
  count2 = 0,
  count3 = 0;
for (i; i < s.length; i++) {
  switch (s[i]) {
    case "e":
    case "y":
    case "u":
    case "i":
    case "o":
    case "a":
      count1++;
      break;
    case "q":
    case "w":
    case "r":
    case "t":
    case "p":
    case "s":
    case "d":
    case "f":
    case "g":
    case "h":
    case "j":
    case "k":
    case "l":
    case "z":
    case "x":
    case "c":
    case "v":
    case "b":
    case "n":
    case "m":
      count2++;
      break;
    default:
      count3++;
  }
}
alert("Гласных: " + count1 + ", согласных: " + count2 + ", других символов: " + count3);
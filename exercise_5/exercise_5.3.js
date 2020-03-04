const domen = window.location.hostname;
let i = domen.length - 1;
while (i > 0) {
  if (domen[i] === ".") {
    console.log(domen.slice(i, domen.length));
    break;
  }
  i--;
}
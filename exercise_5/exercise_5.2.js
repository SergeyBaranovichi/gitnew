const str = prompt("");
const exp = /\+1(-?\d){10}/g;
console.log(str.match(exp));
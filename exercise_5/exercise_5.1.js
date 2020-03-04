function sortArr(array, k) {
    array.sort((a, b) => a[k] - b[k]);
    return array;
  }
let arr = [];
const n = Number(prompt("Введите число объектов массива"));
for (let i = 0; i < n; i++) {
    let obj = {
        "x": Math.round(Math.random() * 150),
        "y": Math.round(Math.random() * 150),
        "z": Math.round(Math.random() * 150)
    };
    arr.push(obj);
}
const oldArr = [];
for (var k in arr) {
    oldArr[k] = arr[k];
}
const key = prompt("Введите ключ x, y или z");
console.log(oldArr);
console.log(sortArr(arr, key));
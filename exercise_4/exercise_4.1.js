function getSum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  alert(getSum(3, 7, 4, 1, 5));
  
  const getRandomNumber = (a, b) => Math.random() * (b - a) + a;
  
  const num1 = Number(prompt("Введите нижний предел диапазона"));
  const num2 = Number(prompt("Введите верхний предел диапазона"));
  alert(getRandomNumber(num1, num2));
  
  const x1 = Number(prompt("Введите координату х первой точки"));
  const y1 = Number(prompt("Введите координату y первой точки"));
  const x2 = Number(prompt("Введите координату х второй точки"));
  const y2 = Number(prompt("Введите координату y второй точки"));
  
  const dot1 = {
    x: x1,
    y: y1
  };
  const dot2 = {
    x: x2,
    y: y2
  };
  
  const getDistance = (a, b) => ((a.x - b.x) ** 2 + (a.y - b.y) ** 2) ** (1 / 2);
  alert("Расстояние между точками: " + getDistance(dot1, dot2));
  
  const getNumberOfColor = () => Math.round(Math.random() * 255);
  alert("RGB: " + getNumberOfColor() + ", " + getNumberOfColor() + ", " + getNumberOfColor());
  
  function checkNumber(a) {
    let i = 2;
    while (i <= a / 2) {
      if (a % i === 0) {
        return true;
      }
      i++;
    }
    return false;
  }
  const num = Number(prompt("Введите число"));
  alert((checkNumber(num)) ? num + " - составное" : num + " - простое");
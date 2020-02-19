let N = Number(prompt("Введите число байт"));
if (N < 1000) {
	alert (N + " байт");
} else {
	N = N / 1024;
  if (N < 1000) {
  	alert (N.toFixed(3) + " Кб");
    } else {
    N = N / 1024;
    if (N < 1000) {
    	alert (N.toFixed(3) + " Мб");
    } else {
    	N = N / 1024;
      alert (N.toFixed(3) + " Гб");
    }
    }
  }
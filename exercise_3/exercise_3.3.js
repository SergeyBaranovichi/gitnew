const names = ["Sergey", "Sasha", "Dima", "Olga", "Andrey", "Artem", "Vasya", "Masha", "Vika", "Zhenya", "Marina"];
const n = Number(prompt("Введите число людей"));
let people = [];
let averageOld = 0;
let rich = "";
let maxSalary = 0;
for (let i = 0; i < n; i++) {
  let birth = new Date(Math.round(Math.random() * 478659600000 + 315522000000));
  let s = Math.round(Math.random() * 500);
  let firstName = names[Math.round(Math.random() * 10)];
  let man = {};
  man.name = firstName;
  man.birthday = birth;
  man.salary = s;
  people.push(man);
  averageOld += new Date() - birth;
  if (maxSalary < s) {
    rich = firstName;
    maxSalary = s;
  }
}
console.log(people);
averageOld = averageOld / (1000 * 60 * 60 * 24 * 365 * n);
console.log("средний возраст " + averageOld.toFixed(2) + " лет");
console.log(rich);
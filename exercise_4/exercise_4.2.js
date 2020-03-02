const floors = Number(prompt("Введите количество этажей (>=3)"));
let house = {
  address: "Komsomol'skaya street, 84",
  year: 1980,
  floors: floors,
  flats: [],
  getSqare: function() {
    let sumSqare = 0;
    for (let i = 0; i < this.flats.length; i++) {
      sumSqare += this.flats[i].area;
    }
    return sumSqare;
  },
  getMembers: function() {
    let sumPeople = 0;
    for (let i = 0; i < this.flats.length; i++) {
      sumPeople += this.flats[i].people;
    }
    return sumPeople;
  },
  getSumRent: function() {
    let sumRent = 0;
    for (let i = 1; i <= 12; i++) {
      for (let n = 0; n < this.flats.length; n++) {
        sumRent += this.flats[n].getRent(i);
      }
    }
    return sumRent;
  },
  getAveragePopulation: function() {
    return this.getSqare() / this.getMembers();
  }
};
let flatss = [];
const getRentFlat = function(a) {
  if ((a >= 4) && (a <= 10)) {
    return this.area * this.people / 2;
  } else return 1.8 * this.area * this.people / 2;
}

for (let i = 1; i <= floors * 2; i++) {
  let flat = {};
  flat.rooms = Math.round(Math.random() * 3 + 1);
  flat.people = Math.round(Math.random() * 3 + 1);
  flat.area = Math.round(Math.random() * 10 + 20);
  flat.floor = Math.ceil(i / 2);
  flat.number = i;
  flat.getRent = getRentFlat;
  flatss.push(flat);
}

house.flats = flatss;
console.log(house);
console.log(house.getSqare());
console.log(house.getMembers());
console.log(house.getSumRent());
console.log(house.getAveragePopulation());
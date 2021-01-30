// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
console.log(brad.calculateAge);

function Car(color, year, start, stop) {
  this.color = color;
  this.year = year;
  this.start = function () {
    console.log(start);
  };
  this.stop = function () {
    console.log(stop);
  };
}

const audi = new Car('red', 2020, 'suca', 'sucaTU');
audi.start();
console.log(audi);

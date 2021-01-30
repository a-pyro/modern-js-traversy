// Modi alternativi di creare oggetti

// & creo prototipo
const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

// % creo nuova persona a partire dal proototipo di prima
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

// % prende prima il prototipo e poi eventualmente le proprietà
const brad = Object.create(personPrototypes, {
  firstName: { value: 'Brad' },
  lastName: { value: 'Traversy' },
  age: { value: 36 },
});

console.log(brad);

console.log(brad.greeting());

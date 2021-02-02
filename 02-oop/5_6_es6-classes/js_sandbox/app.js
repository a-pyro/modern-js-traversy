class Person {
  //  nel constructor metto le proprietà 🛠
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  // qua metto direttamente i metodi
  // i metodi aggiunti nella classe vengono aggiunti direttamente al prototype 🤖
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // STATIC METHOTDS:
  // accessibile direttamente senza instantiare l'oggetto! tipo Math.random()
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');

console.log(mary);

console.log(Person.addNumbers(1, 2));

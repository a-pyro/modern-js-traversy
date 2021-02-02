// Inheritance nelle classi

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}
console.log(Person);

// classe child 🧒🏻 estende classe parente 👴🏻
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // 🦸🏻‍♂️ chiama il constructor della classe parente

    // qui vanno le prop della classe child
    this.phone = phone;
    this.membership = membership;
  }

  // questi metodi sono accessibili dalle istanze della classe figlia
  doesntGiveAfuck() {
    return `${this.firstName} doesn't give a fuck`;
  }

  // statici sono accessibili solo dal constructor/classe child che estende
  // non dalle istanze! 🛑
  static getMembershipCost() {
    return 500;
  }
}
const ardi = new Customer('Ardi', 'Germenji', '444', 'Elite');
const ersi = new Person('Ersi', 'Germenji');

console.log(ardi.doesntGiveAfuck()); // customer => puo' accedere ai propri methodi

console.log(ardi.greeting()); // customer => puo' accedere al methodo del padre

// console.log(ersi.doesntGiveAfuck()); //istanza del padre, non puo' accedere al methodo del figli

console.log(ersi);

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());

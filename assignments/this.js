/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Explicit - Calls it explicitly using .call or .apply
* 2. Implicit - The most common type of the context being when it is invoked,
    (to the left of the dot)
* 3. New - Used within a constructor function, which references back to
    a variable which uses the "new" keyword to create a new instance of
     that name.
* 4. Window - When no context is declared, it is defaulted to the browser
      window (DOM).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHello(name) {
  console.log(this);
}
sayHello('Hello');
// Principle 2

// code example for Implicit Binding
const favorites = {
  food: 'tacos',
  movie: 'interstellar',
  drink: 'tom collins',
  speak: function(food, movie, drink) {
    console.log(`My favorite food is ${this.food}, movie is ${this.movie}, and drink is ${this.drink}`);

  }
};
favorites.speak();

// Principle 3

// code example for New Binding

function Person(attr) {
  this.name = attr.name,
  this.age = attr.age,
  this.location = attr.location,
  this.job = attr.job
  console.log(this);
}

Person.prototype.speak = function() {
  console.log(`My name is ${this.name}, and I work as a ${this.job}`)
}

const peter = new Person ({
  name: 'Peter',
  age: 29,
  location: 'WA',
  job: 'developer student'
});

const fred = new Person ({
  name: 'Fred',
  age: 22,
  location: 'VA',
  job: 'cook',

});

const gleek = new Alien ({
  name: 'Gleek',
  age: 2233,
  location: 'Mars',
  job: 'spaceship inspector',
  heads: 3
});
console.log(peter.speak());
console.log(fred.speak());
// Principle 4

// code example for Explicit Binding
console.log(fred.speak.call(peter));
console.log(peter.speak.call(fred));

function Alien(alienAttr) {
  Person.call(this, alienAttr);
  this.heads = alienAttr.heads;
  console.log(this);
}

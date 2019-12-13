console.log('es6-classes-1');

// classes are like blueprints
/*

class Person {
  constructor( name = 'Anonymous', age = 0 ){
    this.name = name;
    this.age = age
  };
  getGreeting() {
    return `Hi. I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`
  }
};


const me = new Person( 'Alan Curtis', 35 );
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person( );
console.log(other.getGreeting());
console.log(other.getDescription());
*/


// -- extends --//
class Person {
  constructor( name = 'Anonymous', age = 0 ){
    this.name = name;
    this.age = age
  };
  getGreeting() {
    return `Hi. I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
};

class Student extends Person {
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  // this will override the parent class method.
  // using super will allow you to use the original method and tweak it.
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
      description += `Their major is ${this.major}.`
    }
    return description;
  }
};

const me = new Student ('Billy Joel', 33, 'Singer');
console.log(me.getDescription());

const other = new Student ();
console.log(other.getDescription());


// -- challenge --//

class Traveler extends Person {
  constructor(name, age, location){
    super(name, age);
    this.location = location;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if(this.location){
      greeting = `${greeting} I am visiting from ${this.location}.`;
    }
    return greeting;
  }
}

const t1 = new Traveler ('Billy Joel', 33, 'New York');
console.log(t1.getGreeting());

const t2 = new Traveler ();
console.log(t2.getGreeting());
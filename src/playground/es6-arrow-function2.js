console.log("es6-arrow-function2");

// arguments object- no longer bound with arrow functions

const add = function ( a, b ) {
  console.log( arguments );
  return a + b ;
}
console.log( add(4,5,999));

// this keyword - no longer bound

// one way to right it
/*
const user = {
  name:'Andrew',
  cities: ['Philly', 'New York', 'Dublin'],
  printPlacesLived: function () {
    this.cities.forEach(( city ) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

user.printPlacesLived();
*/

// 2nd way to right it without function keyword
const user = {
  name:'Andrew',
  cities: ['Philly', 'New York', 'Dublin'],
  printPlacesLived() {
    this.cities.forEach(( city ) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

user.printPlacesLived();

// challenge

const multiplier = {
  numbers:[1,2,3],
  multiplyBy: 3,
  multiply(){
    return this.numbers.map((number) => {
      return number * this.multiplyBy;
    });
  }
}

console.log(multiplier.multiply());
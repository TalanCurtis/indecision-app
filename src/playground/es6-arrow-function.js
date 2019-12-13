console.log("es6-arrow-function");

// regular function
function square ( x ) {
  return x * x;
}
console.log( square(2));

// arrow function
const squareArrow = (x) => x * x;
console.log(squareArrow(3));

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Alan Curtis'))
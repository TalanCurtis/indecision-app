console.log("running es6-let-const");

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameCost', nameConst);

// let and const are block scoped
// var is function scoped

var fullName = 'Andrew';

// priority 
// const
// let
// never use var
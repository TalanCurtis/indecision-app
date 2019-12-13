console.log("running utils");

const square = (x) => x*x;
const add = (a,b) => a+b;

const subtract = (a,b) => a-b;
export default subtract;

// named export
export { square, add };


// inline export
/*
export const square = (x) => x*x;
export const add = (a,b) => a+b;
*/

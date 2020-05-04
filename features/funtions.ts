const add = (a: number, b: number): number => {
  return a + b;
};

//functio keyword
function divide(a: number, b: number): number {
  return a / b;
}

//anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

//never type means we are never going to reach the end of this function
const throwError = (message: string): never => {
  throw new Error(message);
};

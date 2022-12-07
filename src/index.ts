export const subtract = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('here');
  }
  return a - b;
};

export const multiply = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('multiplying');
  }
  return a * b;
};

export const divide = (a: number, b: number) => {
  return a / b;
};

export const add = (a: number, b: number) => {
  return a + b;
};

export const squared = (a: number) => {
  return a * a;
};

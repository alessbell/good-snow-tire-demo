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

export const exponent = (a: number, b: number) => {
  return Math.pow(a, b);
};

export const powerOf3 = (a: number) => {
  return Math.pow(a, 3);
};

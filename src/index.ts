export const subtract = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('here');
  }
  return a - b;
};

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('testing')
    console.log('beep boop');
  }
  return a + b;
};

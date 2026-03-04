// Array<T> or T[]

//example with array of numbers
function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc, value) => acc * value, 1);
}

//example with array of strings
function concatNames(...args: string[]): string {
  return args.reduce((acc, value) => acc + ' ' + value);
}

console.log(concatNames('Samuel', 'Medeiros', 'de Albuquerque'));
console.log(multiplyArgs(4, 4, 6, 10));

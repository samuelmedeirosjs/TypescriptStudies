// Basic Types (with type inference)
const name: string = 'Samuel';
const age: number = 19;
const isAdult: boolean = true; //only "true" or "false"
const symbol: symbol = Symbol('Any symbol');
const bigNumber: bigint = 5n;

// Arrays
const arrayNumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayNumbers2: number[] = [1, 2, 3, 4, 5]; //equivalent

const arrayStrings: Array<string> = ['Hello', 'World'];
const arrayStrings2: string[] = ['Hello', 'World']; //equivalent

// Objects
const persons: {
  name: string;
  age: number;
  isAdult: boolean;
  height?: number;
} = {
  name,
  age,
  isAdult,
  height: 180,
};

// Functions
function multiply(a: number, b: number): number/*(with type inference)*/ {
  return a * b;
}

const sum: (x: number, y: number) => number/*(with type inference)*/ = (x, y) => x + y;

console.log('Soma', sum(7, 5));
console.log('Produto', multiply(7, 5));

const dataClient: [string, number, string?] = ['Samuel Medeiros', 19];
dataClient[2] = 'Student';

const dataClient2: readonly [string, number, ...string[]] = [
  'Grazielly',
  19,
  'Student',
  'Andrade',
];

// dataClient2.pop()

console.log(dataClient);
console.log(dataClient2);

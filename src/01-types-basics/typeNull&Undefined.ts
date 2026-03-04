//example of undefined type
function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string | undefined; //because is a optional key
} {
  return {
    firstName,
    lastName,
  };
}

console.log(createPerson('Samuel', 'Medeiros'));

//example of null type
function double(arg: any): number | null {
  return typeof arg === 'number' ? arg * 2 : null;
}

const result = double(25);
console.log(typeof result === 'number' ? result : 'entrada inválida');

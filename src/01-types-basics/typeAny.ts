// Use "any" only as a last resort
const showMessage = (msg: any) => msg;

console.log(showMessage('Hello, World!'));
console.log(showMessage({ name: 'Samuel Medeiros' }));
console.log(showMessage(10));
console.log(showMessage([10, 20, 30]));

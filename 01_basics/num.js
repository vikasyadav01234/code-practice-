const score = 400;
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 100.932;
console.log(otherNumber.toPrecision(4));

const hundred = 10000000002;
console.log(hundred.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.5));
console.log(Math.random());




const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * (max-min+1))+min);
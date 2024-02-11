const name = "Vikas Yadav";
const repocount = 50;
console.log(name+repocount+"value");

console.log(`Hello My name is ${name} and my repo number is ${repocount}`);
const gameName = new String('Vikas Yadav')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(5));

console.log(gameName.indexOf('Ya'));
const newString = gameName.substring(0, 4);
console.log(newString);

const newString2 = gameName.slice(-8, 4);
console.log(newString2);

const newString3 = "      Vikas Yadav      ";
console.log(newString3);

console.log(newString3.trim());

const url = "https://www.onlineshop%2003.thm";
console.log(url.replace('%2003',''));
console.log(url.includes('shop'));
console.log(gameName.split(' '));
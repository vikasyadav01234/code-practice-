const myArr  = [0,1,2,3,4,5,6];
const myHeors = ["shaktiman","jai","hdf","uidif"];

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//arrays method

myArr.push(7)
console.log(myArr);
myArr.pop()
console.log(myArr);
myArr.unshift(9);
myArr.shift();
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log(myArr);

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);


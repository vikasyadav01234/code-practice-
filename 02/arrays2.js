const marval_heros = ["thor","Ironman","spiderman"]

const dc_heros = ["superman","batman","flash"]

const all=marval_heros.concat(dc_heros);
console.log(all);
const allheros = [...marval_heros, ...dc_heros];
console.log(allheros);

const another_array = [1,2,3,4,5,[4,3,434,44342,23,45,64,[43,555,66,776,44,32,43,[45,65,34,56,45]]],34,45,54,234,456,435,85,645,4567,567,4564];
const real=another_array.flat(Infinity);
console.log(real);

console.log(Array.isArray("Vikas"));
console.log(Array.from("Vikas Yadav"));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
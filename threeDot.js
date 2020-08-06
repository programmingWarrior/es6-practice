const frd = [33,44,56,677];
const frds = [44,66,77,78];
const frds2 = [44,55,66,77];


const allFrd = frd.concat(frds);
const frdsAll = [...frd, ...frds,10,45, ...frds2];
console.log(frdsAll);

const shawon = 10000 ;
const riajul = 4444;
const samrat = 4000;
const maximum = Math.max(shawon,riajul,samrat);
console.log(maximum);

const nums = [33,333,4444,5555,66666];
const maximumNum = Math.max(...nums);
console.log(maximumNum);
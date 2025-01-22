function multiply(...args) {
 const uniqNumbs = [... new Set(args)];

 return uniqNumbs.reduce((acc,num) => acc * num ,1)
} 

console.log(multiply(2, 3, 4)); // 24
console.log(multiply(2, 3, 2, 4)); // 24
console.log(multiply(5, 5, 5, 5, 1)); // 5
console.log(multiply(7, 7, 2)); // 14

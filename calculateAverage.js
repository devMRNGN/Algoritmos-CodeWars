function findAverage(array) {
   sumOfArray = array.reduce((acc, cur) => acc+cur, 0);
   return sumOfArray ? sumOfArray/array.length : 0;
 }

console.log(findAverage([1,2,3,4]));
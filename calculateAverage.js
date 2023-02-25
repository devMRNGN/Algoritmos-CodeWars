function findAverage(array) {
   sumOfArray = array.reduce((acc, cur) => acc+cur, 0);
   return sumOfArray/array.length;
}

console.log(findAverage([1,2,3,4]));
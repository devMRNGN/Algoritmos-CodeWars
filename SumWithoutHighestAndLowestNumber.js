function sumArray(array) {
   if(array === null || array === undefined) return 0;
   const max = Math.max(...array);
   const min = Math.min(...array);
   const result = array.reduce((acc,cur) => acc+cur,0);
   return result != 0 && array.length > 2? result-min-max : 0;
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]));
console.log(sumArray([ -6, -20, -1, -10, -12 ]));
console.log(sumArray([ 3 ]))
console.log(sumArray([ 0, 1, 6, 10, 10 ]))
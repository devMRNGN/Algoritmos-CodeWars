function oddOrEven(array) {
   const sumArray = array.reduce((acc, cur) => acc+cur,0);
   return sumArray % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([1,-5,2,5,4]));
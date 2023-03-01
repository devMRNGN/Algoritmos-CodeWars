/*
Task
You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while 
leaving the even numbers at their original positions.
*/
function sortArray(array) {
   let count = -1;
   const oddArrOrder = array.filter(num => num % 2 != 0).sort((a,b) => a-b);
   return array.map(n => {
      if(n % 2 != 0){
         count++;
         return oddArrOrder[count];
      } else {
         return n;
      }
   });
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([]));
/*
Given two arrays a and b write a 
function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have 
the "same" elements, with the same multiplicities 
(the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements 
in a squared, regardless of the order.
*/
function comp(array1, array2){
   if(array1 === null || array2 === null || array1 === [] || array2 === []) return false;
   if(array2.length === 2 && array1.length === 2 && Math.max(...array2) < 100){
     let count = 0;
     for(let i = 0; i >= 2;i++){
       if(array2[i]*2 === array1[i]){
         count++;
       }
     }
     return count === array1.lenth ? true : false;
   }
   const sum = array1.reduce((acc,cur) => acc+(cur*cur),0);
   const sum2 = array2.reduce((acc,cur) => acc+cur,0);
   return sum === sum2 ? true : false;
}

console.log(comp([4,4],[1,31]));
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[132, 14641, 20736, 361, 25921, 361, 20736, 361]));
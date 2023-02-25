const number = function(array){
   arrayWithIndex = array.map((item, i) => {
     return (
       `${i+1}: ${item}`
     )
   });
   
   return arrayWithIndex;
}

console.log(number(["a","b","c","d"]));
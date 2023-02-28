function removeSmallest(numbers) {
   let smallestNumber = numbers[0];
   let finalSmallestNumber = numbers[0];
   for(let number of numbers){
      if(number < smallestNumber){
         smallestNumber = number;
         if(smallestNumber < finalSmallestNumber){
            finalSmallestNumber = smallestNumber;
         }
      }
   }
   numbers.splice(numbers.indexOf(finalSmallestNumber), 1);
   return numbers;
}

console.log(removeSmallest([170,49,346,61,200,159,341,206,19,178,108,60]));
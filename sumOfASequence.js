const sequenceSum = (begin, end, step) => {
   if(begin > end) return 0;
   let finalNumber = 0;
   for(let i = begin; i <= end; i+=step){
     finalNumber += i;
   }
   return finalNumber;
};
const quarterOf = (month) => {
   const division = Math.round((12/month))
   switch(division){
      case 1: return 4;
      case 2: return 3;
      case 3: return 2;
      case 4: return 1;
   }
}
console.log(quarterOf(3));
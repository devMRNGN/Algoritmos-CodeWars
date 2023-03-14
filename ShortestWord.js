function findShort(s){
   const arrayOfLenghts = [];
   const array = s.split(" ");
   for(let string of array){
      arrayOfLenghts.push(string.length);
   }
   return Math.min(...arrayOfLenghts);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
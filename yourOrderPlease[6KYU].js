function order(words){
   const orderedWords = [];
   let count;
   const arrWords = words.split(" ");
   for(count = 1; count <= arrWords.length; count++){
      orderedWords.push(arrWords.filter(word => word.includes(String(count))));
   }
   return orderedWords.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"))
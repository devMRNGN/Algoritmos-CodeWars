function solution(str, ending){
   const endingLength = ending.length;
   const strLength = str.length;
   const finalsCharArray = Array.from(str.slice((strLength-endingLength), (endingLength+strLength)));
   let count = 0;
   const endingArray = Array.from(ending);
   for(let i = 0; i < finalsCharArray.length; i++){
      if(finalsCharArray[i] === endingArray[i]){
         count++
      }
   }
   if(count === finalsCharArray.length) return true;
   return false;
}

console.log(solution('abcde', 'cde'))
console.log(solution('fghi', 'hii'))
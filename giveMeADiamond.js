function diamond(n){
   if(n % 2 === 0 && n <= 0) return null;
   let result =  '';
   for(let i = 1; i <= n; i++){
      if(i % 2 != 0){
         for(let j = 1; j <= i; j++){
            result+='*';
         }
         result += "\n";
      }
   }
   for(let i = (n-1); i >= 0; i--){
      if(i % 2 != 0){
         for(let j = 1; j <= i; j++){
            result += '*';
         }
         result += '\n';
      }
   }
   return result;
}

console.log(diamond(5));
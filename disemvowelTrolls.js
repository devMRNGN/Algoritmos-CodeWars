function disemvowel(str) {
   const arrayString = Array.from(str);
   const newArrayString = arrayString.filter(letter => {
      return (
         letter != "A" && letter != "E" && letter != "I" && letter != "O" && letter != "U" && letter != "a" && letter != "e" && letter != "i" && letter != "o" && letter != "u" 
      )
   });

   return newArrayString.join('');
}

console.log(disemvowel("This website is for losers LOL!"));
function alphabetPosition(text) {
   return text.split("").map(letter => {
      if(/[a-z]/i.test(letter)){
        return letter != letter.toUpperCase() ? letter.charCodeAt()-96 : letter.charCodeAt()-64;
      } 
      return " ";
   })
   .filter(letter => letter != " ")
   .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
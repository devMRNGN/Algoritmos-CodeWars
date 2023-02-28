function alphabetPosition(text) {
   return text.split("").map(letter => letter != letter.toUpperCase() ? letter.charCodeAt()-96 : letter.charCodeAt()-64)
   .join(" ")
   .split(" ")
   .filter(n => n > 0)
   .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
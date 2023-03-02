function squareDigits(num){
   return +(String(num).split("").map(num => +num*+num).join(""))
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
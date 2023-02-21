function makeNegative(num) {
   if(num > 0) {
      const negativeNumber = +(`-${num.toString()}`);
      return negativeNumber;
   } else {
      return num;
   }
}

console.log(makeNegative(22));
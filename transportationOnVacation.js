function rentalCarCost(d) {
   if(d >= 7) return (d*40)-50;
   return d >= 3 ? (d*40)-20 : d*40;
}

console.log(rentalCarCost(3));
console.log(rentalCarCost(1));
console.log(rentalCarCost(7))
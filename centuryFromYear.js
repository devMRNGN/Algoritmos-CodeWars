function century(year) {
   if(year <= 100) return 1;
   if(year % 100 === 0) return Math.round(year/100);
   if(year % 100 < 50) return Math.round((year/100)+1)
   return Math.round(year/100);
}

console.log(century(12788));
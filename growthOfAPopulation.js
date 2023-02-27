const nbYear = (p0, percent, aug, p) => {
   let yearCount = 0;
   let actualPopulation = p0;
   do{
      yearCount++;
      actualPopulation = Math.round((actualPopulation*(1+(percent/100)))+aug);
   }while(actualPopulation <= p);
   return yearCount;
}

console.log(nbYear(1500, 5, 100, 5000));
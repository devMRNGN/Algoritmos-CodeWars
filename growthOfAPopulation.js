const nbYear = (p0, percent, aug, p) => {
   let yearCount = 0;
   let actualPopulation = p0;
   do{
      actualPopulation = Math.ceil(actualPopulation*(1+(percent/100))+aug);
      yearCount++;
      console.log(actualPopulation)
   }while(actualPopulation < p);
   return yearCount;
}

console.log(nbYear(1500000, 2.5, 10000, 2000000));
class SmallestIntegerFinder {
   findSmallestInt = args =>  {
      let smallestNumber = args[0];
      args.forEach(num => {if(num <= smallestNumber) smallestNumber = num});
      return smallestNumber;
   }
}
let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([34, -345, -1, 100]));
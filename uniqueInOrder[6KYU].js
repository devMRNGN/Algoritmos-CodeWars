const uniqueInOrder = iterable => {
   if(typeof iterable === typeof ["a"]){
      return iterable.filter((x, i) => x != iterable[i-1]);
   }
   return iterable.split("").filter((char,i) => char != iterable.split("")[i-1]);
}
// Or minimal method 
// const uniqueInOrder = iterable => typeof iterable === typeof ["teste"] ? iterable.filter((x, i) => x != iterable[i-1]) : iterable.split("").filter((char,i) => char != iterable.split("")[i-1]); 
console.log(uniqueInOrder([1,1,2,3,4,4]));
console.log(uniqueInOrder(["a","a","b","A"]));
console.log(uniqueInOrder("aaaaaBBeElL"))
const countBy = (x, n) => Array(n).fill(x).map((_,i) => x*(i+1));
console.log(countBy(2,5))
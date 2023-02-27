const positiveSum = arr => arr.filter(n => n > 0).reduce((acc,cur) => acc+cur,0);


console.log(positiveSum([-1, -5, -15, 1,2,3,4,5]));
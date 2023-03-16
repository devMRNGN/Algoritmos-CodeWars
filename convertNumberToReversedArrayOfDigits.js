const digitize = n => String(n).split("").reverse().map(n => +n);

console.log(digitize(35231));
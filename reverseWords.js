const reverseWords = str => String((Array.from(str).reverse()).join("")).split(" ").reverse().join(" ");

console.log(reverseWords('double door oi tudo bem'));
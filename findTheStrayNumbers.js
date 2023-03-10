function stray(numbers) {
   const filtered = numbers.filter(num => num != numbers[0]);
   return filtered.length > 1 ? numbers[0] : filtered[0];
}

console.log(stray([2, 1, 2]));
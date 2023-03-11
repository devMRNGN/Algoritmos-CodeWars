const countSmileys = arr => {
   let count = 0;
  console.log(arr)
   arr.forEach(smile => {
      const bool = smile === ':D' || smile === ':~)' || smile === ';~D' || smile === ':)' || smile === ';-D' || smile ===  ":-D" || smile === ":-)" || smile === ";D" || smile === ";~)" || smile === ";)" || smile === ";-)" || smile === ":~D";
      bool ? count++ : count+=0;
   })
   return count;
}

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))
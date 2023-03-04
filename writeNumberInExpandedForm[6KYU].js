function expandedForm(num) {
   let length = String(num).length;
   return String(num).split("").map((num, index) => {
       let countOfZeros = '';
       if(+num === 0) return;
       for(let i = 1; i < length-index; i++){
         countOfZeros += '0';
       }
       return `${num+countOfZeros}`
   }) .filter(num => num != undefined).join(" + ")
}

console.log(expandedForm(70304));
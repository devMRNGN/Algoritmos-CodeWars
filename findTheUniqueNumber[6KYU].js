function findUniq(arr) {
   let num = arr[0];
   const arrNum = arr.filter(number => number != num);
   return arrNum.length > 1 ? arr[0] : arrNum[0];
}
 
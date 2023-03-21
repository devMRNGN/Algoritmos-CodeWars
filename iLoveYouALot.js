function howMuchILoveYou(nbPetals) {
   const words = {
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly",
      6: "not at all"
   }
   return words[nbPetals];
}

console.log(howMuchILoveYou(1));
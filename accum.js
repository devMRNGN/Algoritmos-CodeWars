const accum = s => s.split("").map((letter, i) => `${letter.toUpperCase()}${(letter.toLowerCase().repeat((i)))}`).join("-");


console.log(accum("ZpglnRxqenU"));
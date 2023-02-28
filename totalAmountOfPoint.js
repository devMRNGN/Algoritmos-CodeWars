function points(games) {
   let ourPoints = [];
   arrGames =  games.map((game, i) => game.split(":")).forEach(game => {
      if(+(game[0]) > +(game[1])) return ourPoints.push(3);
      if(+(game[0]) === +(game[1])) return ourPoints.push(1);
   });
   return ourPoints.reduce((acc,cur) => acc+cur,0);
}

console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
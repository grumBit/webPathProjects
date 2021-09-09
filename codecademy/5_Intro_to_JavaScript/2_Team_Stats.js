const traverseObj = (obj, indent) => {

  if ( typeof obj != 'object') return;
  if ( indent === undefined ) indent = '';

  for (propertyName in obj) {
      let propertyValue = obj[propertyName];

      let valueType = typeof propertyValue;
      switch (valueType) {
          case 'function' :
              console.log(`${indent}> ${propertyName} (${valueType})`);
//              propertyValue();
              break;
          case 'object' :
              console.log(`${indent}> ${propertyName} (${valueType})`);
              traverseObj(propertyValue, indent + "    ");
              break;
          default :
              console.log(`${indent}> ${propertyName} (${valueType}) : ${propertyValue}`);
              break;
      }
  }
}


const team = {

  _players : [
    {firstName:'Pablo', lastName:'Sanchez', age: 11},
    {firstName:'Ro', lastName:'Coster', age: 12},
    {firstName:'Finn', lastName:'Coster', age: 11}
  ],
  get players(){ return this._players },
  addPlayer(firstName, lastName, age){
    this.players.push({firstName, lastName, age});
  },

  _games : [
    {opponent:'Broncos', teamPoints: 4, opponentPoints: 2},
    {opponent:'Muppets', teamPoints: 2, opponentPoints: 7},
    {opponent:'Baxter', teamPoints: 4, opponentPoints: 3}
  ],
  get games(){ return this._games },
  addGame(opponent, teamPoints, oppenentPoints){
    this.games.push({opponent, teamPoints, oppenentPoints});
  },

};

team.addPlayer('Mick','Maloy',52);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Mt Martha', 6, 2);
team.addGame('Hallam', 6, 6);
team.addGame('Mornington', 4, 1);

traverseObj(team);
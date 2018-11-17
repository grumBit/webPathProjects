
function dogFactory(_name, _breed, _weight){
  if ( typeof _name != 'string' || typeof _breed != 'string' || typeof _weight != 'number' ){
    return undefined;
  }
  return {
    _name,
    _breed,
    _weight,

    get name(){return this._name},
    get breed(){return this._breed},
    get weight(){return this._weight},

    set name(name) { this._name = name },
    set breed(breed) { this._breed = breed },
    set weight(weight) { this._weight = weight },
    
    bark() {return 'ruff! ruff!'},
    eatTooManyTreats() {this._weight += 1}
  }
}

const dog = dogFactory('Joe', 'Pug', 27);
dog.weight = 29;
dog.eatTooManyTreats();

console.log(dog); // output: Object {_name: "Joe", _breed: "Pug", _weight: 30, name: <accessor>, breed: <accessor>, …}

const traverseObj = (obj, indent) => {

  if ( typeof obj != 'object') return;
  if ( indent === undefined ) indent = '';

  for (propertyName in obj) {
      let propertyValue = obj[propertyName];

      let valueType = typeof propertyValue;
      switch (valueType) {
          case 'function' :
              console.log(`${indent}> ${propertyName} (${valueType})`);
//                  propertyValue();  // <- could call function like this, but it's not safe without args to provide
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

traverseObj(dog);
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

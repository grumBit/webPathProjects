// See https://lodash.com/docs for function specs

// Grum notes to self;
//   - Test these _ methods using "node test/test-all.js" or "VS Code Lodash test suite" config
//   - Implement functions as copmactly as possile, using js built-ins & recursion where possible.  
//   - Ignore reability & maintainability.

const _ = {
  clamp(number, lower, upper){ return number < lower ? lower : number > upper ? upper : number  },
  inRange(number, start, end = 0) { return start > end ? number >= end && number < start : number >= start && number < end },
  words(string) { return string.split(' ') },
  pad(string, length) {  // Uses alternating recursion
    const padRight = (string, numPads) => numPads < 1 ? string :  padLeft(string, numPads - 1) + " ";
    const padLeft =  (string, numPads) => numPads < 1 ? string : " " + padRight(string, numPads - 1);
    return padRight(string, length - string.length) },
  has(object, key) { return typeof object[key] != 'undefined' },
  invert(object, invertedObject = {} ){
    for ( let key in object) { invertedObject[object[key]] = key }
    return invertedObject },
  findKey(object, predicate) { for (let key in object) if (predicate(object[key])) return key },
  drop(array, n = 1) { return array.slice(n) },
  dropWhile(array, predicate){ return array.slice(array.findIndex((e,i,a) => !predicate(e,i,a))) },
  chunk(array, size, newArray = []){
    if( array.length < 1) return newArray ;
    newArray.push(array.splice(0, size));
    return this.chunk(array, size, newArray) /*recurse*/ }
};

module.exports = _;
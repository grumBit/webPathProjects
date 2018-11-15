class Media {
  constructor(title){
    this._isCheckedOut = false;
    this._ratings = [];
    this._title = title;
  }

  get isCheckedOut(){return this._isCheckedOut}
  get ratings(){return this._ratings}
  get title(){return this._title}
  
  toggleCheckOutStatus(){
    this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true
  }
  
  addRating(rating){this._ratings.push(rating)}
  
  getAverageRatings(){
    return this.ratings.reduce((ac,cu)=>{return ac + cu})/(this.ratings.length);
  }
}

class Book extends Media {
  
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){return this._author}
  get pages(){return this._pages}

}

class Movie extends Media {
  
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){return this._director}
  get runTime(){return this._runTime}
}

class CD extends Media {
  
  constructor(title, artist, songs){
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist(){return this._artist}
  get songs(){return this._songs}
}

const testMedia = new Media('A Title');
console.log(testMedia);

testMedia.toggleCheckOutStatus();
console.log(testMedia);

testMedia.addRating(2);
testMedia.addRating(4);
console.log(testMedia);
console.log("Avg rating = " + testMedia.getAverageRatings());

const testBook = new Book('A Book Title', 'An Author', 500);
console.log(testBook);

const testMovie = new Movie('A Movie Title', 'A. Director', 120);
console.log(testMovie);

const testCD = new CD('An Album Title', 'An Artist', ['track1','track2']);
console.log(testCD);

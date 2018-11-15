const menu = {
  
  _courses : {
    _validCourses: [ 'appetizers', 'mains', 'desserts'],
    get validCourses(){
      return this._validCourses;
    },

    _appetizers : [],
    get appetizers(){
      return this._appetizers;
    },
    set appetizers(appetizers){
      this._appetizers = appetizers;
    },

    _mains : [],
    get mains(){
      return this._mains;
    },
    set mains(mains){
      this._mains = mains;
    },

    _desserts : [],
    get desserts(){
      return this._desserts;
    },
    set desserts(desserts){
      this._desserts = desserts;
    },
  },

  get courses(){
    return {
      appetizers : this._courses.appetizers,
      mains : this._courses.mains,
      desserts : this._courses.desserts
    };
  },

  get typesOfCourses(){
    return this._courses.validCourses;
  },

  addDishToCourse(courseName, dishName, dishPrice){

    if ( typeof dishName != 'string' || dishName.length < 3 ) {
      console.log(`Error: Invalid dishName '${dishName}' - must be a string at least 3 characters long.`);
      return;
    }

    if ( typeof dishPrice != 'number' || dishPrice <= 0 ) {
      console.log(`Error: Invalid dishPrice '${dishPrice}' - must be a number greater than 0.`);
      return;
    }


    if ( ! this.typesOfCourses.includes(courseName)) {
      console.log(`Error: Invalid courseName '${courseName}' - must be one of ${this.typesOfCourses.join(", ")}.`);
      return;
    }

    const dish = { name: dishName, price: dishPrice };
    this.courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
    if ( this.typesOfCourses.includes(courseName)) {
      const dishes = this.courses[courseName];
      return dishes[Math.floor(Math.random() * dishes.length)];
    } else {
      console.log(`Error: Invalid courseName '${courseName}' - must be one of ${this.typesOfCourses}.`);
    }
  },

  getRandomMeal(){
    const meal = { dishes: [], price: 0};
    const totalPrice = 0;
    this.typesOfCourses.forEach(course => {
      const dish = this.getRandomDishFromCourse(course);
      meal.dishes.push(dish.name);
      meal.price += dish.price;
    });
    return `Meal consists of ${meal.dishes.join(", ")}.  Total price $${meal.price}`;
  },
};

menu.addDishToCourse('appetizers', 'Tom Tum Soup', 5.00);
menu.addDishToCourse('appetizers', 'Fish Cakes', 6.00);
menu.addDishToCourse('appetizers', 'Spring Rolls', 8.00);
menu.addDishToCourse('mains', 'Larb Gai', 11.00);
menu.addDishToCourse('mains', 'Pad Thai', 15.00);
menu.addDishToCourse('mains', 'Fried Whole Fish', 18.00);
menu.addDishToCourse('desserts', 'Icecream', 3.00);
menu.addDishToCourse('desserts', 'Soybean Cake', 4.00);
menu.addDishToCourse('desserts', 'Fried Icecream', 4.50);

menu.addDishToCourse('breakfasts', 'Soybean Cake', 4.00); //test - invalid course
menu.addDishToCourse('desserts', 7, 4.00); //test - dish name not a string
menu.addDishToCourse('desserts', 'So', 4.00); //test - dish name not long enough
menu.addDishToCourse('desserts', 'Soybean Cake', "$4.00"); //test - dish price not a number
menu.addDishToCourse('desserts', 'Soybean Cake', 0.00); //test - dish price not greater than 0


for ( let i = 0 ; i < 10 ; i++) {
  console.log(menu.getRandomMeal());
}
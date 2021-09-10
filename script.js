const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },
  
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  
  getRandomDishToCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    },
  
  generateRandomMeal(){
    const appetizer = this.getRandomDishToCourse('appetizers');
    const main = this.getRandomDishToCourse('mains');
    const dessert = this.getRandomDishToCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price to pay will be $${totalPrice}.`;
  },
};

menu.addDishToCourse('appetizers', 'Appetizer 1', 7);
menu.addDishToCourse('appetizers', 'Appetizer 2', 6.7);
menu.addDishToCourse('appetizers', 'Appetizer 3', 5.6);
menu.addDishToCourse('appetizers', 'Appetizer 4', 5);
menu.addDishToCourse('mains', 'Main 1', 7);
menu.addDishToCourse('mains', 'Main 2', 6.7);
menu.addDishToCourse('mains', 'Main 3', 5.6);
menu.addDishToCourse('mains', 'Main 4', 5);
menu.addDishToCourse('desserts', 'Dessert 1', 7);
menu.addDishToCourse('desserts', 'Dessert 2', 6.7);
menu.addDishToCourse('desserts', 'Dessert 3', 5.6);
menu.addDishToCourse('desserts', 'Dessert 4', 5);

console.log(menu.generateRandomMeal());
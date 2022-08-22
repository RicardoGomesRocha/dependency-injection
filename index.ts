class Food {
  description = "";
  constructor(description: string) {
    this.description = description;
  }
}

class Restaurant {
  private _name: string;
  constructor(private name: string) {
    this._name = name;
  }
  orderFood(order: string): Food {
    return new Food(order);
  }
}

class Minion {
  private _restaurant: Restaurant;
  private _favoriteFood = "Bananas";
  constructor(restaurant: Restaurant) {
    this._restaurant = restaurant;
  }
  lunch() {
    const food = this._restaurant.orderFood(this._favoriteFood);
    console.log(`Minion says: "I'm having ${food.description} for lunch"`);
  }
}

class Guru {
  isLunchTime() {
    const restaurant = new Restaurant("Despicable");
    const minion = new Minion(restaurant);
    minion.lunch();
  }
}

const guru = new Guru();
guru.isLunchTime();

import Dish from "./dish";

export class Dessert extends Dish {
  public slicesNumber: number;
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  }

  public getSlicePrice(): number {
    return this.price / this.slicesNumber;
  }

  public cook(): void {
    console.log("Baking Dessert");
  }
}

export const brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
export const pudim = new Dessert(100, 10, ["leite condensado, ovos, acucar"], 120, 15)
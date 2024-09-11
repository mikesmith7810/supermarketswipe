import { Category } from "./Category";

export class SupermarketRoute {
  name: string;
  route: Category[];

  constructor(name: string, route: Category[]) {
    this.name = name;
    this.route = route;
  }
}

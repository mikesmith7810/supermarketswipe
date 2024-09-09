import { Category } from "@/app/(tabs)";

export class Item {
  name: string;
  category: Category;

  constructor(name: string, category: Category) {
    this.name = name;
    this.category = category;
  }
}

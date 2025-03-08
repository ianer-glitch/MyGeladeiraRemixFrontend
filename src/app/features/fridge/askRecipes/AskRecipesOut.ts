export default class AskRecipesOut {
  public title: string;
  public ingredients: string[];
  public method: string;

  constructor(title: string, ingredients: string[], method: string) {
      this.title = title;
      this.ingredients = ingredients;
      this.method = method;
  }
}

export default class Item {
  Name: string = '';
  Color: string = '';
  Expiration: Date = new Date();
  IconName: string = '';
  MinimunQuantity: number = 0;
  Quantity: number = 0;
  Weight: number = 0;
  ShouldAddToShoppingList: boolean = false;
  IsExpired: boolean = false;

}
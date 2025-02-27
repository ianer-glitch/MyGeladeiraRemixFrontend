export default class UpdateFridgeItemIn {
  expiration: Date;
  minimunQuantity: number;
  quantity: number;
  itemId: string;

  constructor(expiration: Date, minimunQuantity: number, quantity: number, itemId: string) {
      this.expiration = expiration;
      this.minimunQuantity = minimunQuantity;
      this.quantity = quantity;
      this.itemId = itemId;
  }
}

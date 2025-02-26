export default class GetFridgeItemsOut {
  iconLink: string;
  color: string;
  percentageExpired: string;
  quantity: number;
  itemId: string;

  constructor(
      iconLink: string,
      color: string,
      percentageExpired: string,
      quantity: number,
      itemId: string
  ) {
      this.iconLink = iconLink;
      this.color = color;
      this.percentageExpired = percentageExpired;
      this.quantity = quantity;
      this.itemId = itemId;
  }
}

export default class GetFridgeItemsOut {
  iconLink: string;
  color: string;
  percentageExpired: string;
  quantity: number;
  itemId: string;
  minimumQuantity : number;
  name : string;
  expiration:Date

  constructor(
      iconLink: string,
      color: string,
      percentageExpired: string,
      quantity: number,
      itemId: string,
      minimumQuantity : number,
      name:string,
      expiration:Date
  ) {
      this.iconLink = iconLink;
      this.color = color;
      this.percentageExpired = percentageExpired;
      this.quantity = quantity;
      this.itemId = itemId;
      this.minimumQuantity = minimumQuantity
      this.name = name,
      this.expiration = expiration

  }
}

export default class UpdateItemIn {
  public itemId: string;
  public color: string;
  public name: string;
  public minimumQuantity: number;
  public quantity: number;
  public weight: number;
  public expiration: Date;
  public icon: File;
  public userCreationId?: string;

  constructor(
    itemId: string,
    color: string,
    name: string,
    minimumQuantity: number,
    quantity: number,
    weight: number,
    expiration: Date,
    icon: File,
    userCreationId?: string
  ) {
    this.itemId = itemId;
    this.color = color;
    this.name = name;
    this.minimumQuantity = minimumQuantity;
    this.quantity = quantity;
    this.weight = weight;
    this.expiration = expiration;
    this.icon = icon;
    this.userCreationId = userCreationId;
  }
}
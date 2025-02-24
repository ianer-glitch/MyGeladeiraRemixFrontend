export default class CreateItemIn {
  color: string;
  name: string;
  minimumQuantity: number;
  quantity: number;
  weight: number;
  expiration: Date;
  icon: File;

  // Constructor with default values
  constructor(
    color: string = '',
    name: string = '',
    minimumQuantity: number = 0,
    quantity: number = 0,
    weight: number = 0,
    expiration: Date = new Date(),
    icon: File = {} as File
  ) {
    this.color = color;
    this.name = name;
    this.minimumQuantity = minimumQuantity;
    this.quantity = quantity;
    this.weight = weight;
    this.expiration = expiration;
    this.icon = icon;
  }
}

export default class CreateItemIn {
  Color: string;
  Name: string;
  MinimumQuantity: number;
  Quantity: number;
  Weight: number;
  Expiration: Date;
  Icon: File;

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
    this.Color = color;
    this.Name = name;
    this.MinimumQuantity = minimumQuantity;
    this.Quantity = quantity;
    this.Weight = weight;
    this.Expiration = expiration;
    this.Icon = icon;
  }
}

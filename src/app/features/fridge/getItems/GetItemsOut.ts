export default class GetItemsOut{
  id: string;
  color: string;
  name: string;
  icon: string;
  minimumQuantity :number;
  quantity :number;
  expiration : Date;
  weight : number

  constructor(id: string, color: string, name: string, icon: string,minimumQuantity :number,
    quantity :number,
    expiration : Date,weight:number) {
    this.id = id;
    this.color = color;
    this.name = name;
    this.icon = icon;
    this.minimumQuantity = minimumQuantity
    this.quantity = quantity
    this.expiration = expiration
    this.weight = weight
  }
}
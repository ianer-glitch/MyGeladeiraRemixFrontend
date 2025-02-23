export default class GetItemsOut{
  id: string;
  color: string;
  name: string;
  icon: string;

  constructor(id: string, color: string, name: string, icon: string) {
    this.id = id;
    this.color = color;
    this.name = name;
    this.icon = icon;
  }
}
export default class GetItemsShoppingListOut {
  itemName: string;
  itemColor: string;
  itemId: string;
  iconLink:string;
  iconName:string;

  constructor(itemName: string,
     itemColor: string,
     itemId: string,
     iconLink:string,
     iconName:string) {
    this.itemName = itemName;
    this.itemColor = itemColor;
    this.itemId = itemId;
    this.iconLink = iconLink
    this.iconName = iconName
  }
}

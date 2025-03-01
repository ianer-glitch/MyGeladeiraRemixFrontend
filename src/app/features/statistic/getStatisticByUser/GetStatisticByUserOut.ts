export default class GetStatisticByUserOut {
  nationalFoodWasteIndex: number;
  userFoodWasteIndex: number;

  constructor(nationalFoodWasteIndex: number, userFoodWasteIndex: number) {
    this.nationalFoodWasteIndex = nationalFoodWasteIndex;
    this.userFoodWasteIndex = userFoodWasteIndex;
  }
}

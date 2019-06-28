export class CardModel {
  flag: string;
  flipped: boolean;
  matched: boolean;
  id: number;

  constructor(flag: string, flipped: boolean, matched: boolean, id: number = 0) {
    this.flag = flag;
    this.flipped = flipped;
    this.matched = matched;
  }
}

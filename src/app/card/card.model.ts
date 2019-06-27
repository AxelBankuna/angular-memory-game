export class CardModel {
  flag: string;
  flipped: boolean;
  matched: boolean;

  constructor(flag: string, flipped: boolean, matched: boolean) {
    this.flag = flag;
    this.flipped = flipped;
    this.matched = matched;
  }
}

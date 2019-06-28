import { Injectable } from '@angular/core';
import {CardModel} from './card/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  frontCard = [
    {flag: 'Algeria.png', flipped: false, matched: false, id: 0}, {flag: 'Angola.png', flipped: false, matched: false, id: 0}, {flag: 'Benin.png', flipped: false, matched: false, id: 0},
    {flag: 'Botswana.png', flipped: false, matched: false, id: 0}, {flag: 'Burkina-Faso.png', flipped: false, matched: false, id: 0},
    {flag: 'Burundi.png', flipped: false, matched: false, id: 0}, {flag: 'Cameroon.png', flipped: false, matched: false, id: 0},
    {flag: 'Cape-Verde.png', flipped: false, matched: false, id: 0}, {flag: 'Central-African-Republic.png', flipped: false, matched: false, id: 0},
    {flag: 'Chad.png', flipped: false, matched: false, id: 0}, {flag: 'Comoros.png', flipped: false, matched: false, id: 0},
    {flag: 'Cote-dIvoire.png', flipped: false, matched: false, id: 0}, {flag: 'Djibouti.png', flipped: false, matched: false, id: 0},
    {flag: 'DRC.png', flipped: false, matched: false, id: 0}, {flag: 'Egypt.png', flipped: false, matched: false, id: 0},
    {flag: 'Equatorial-Guniea.png', flipped: false, matched: false, id: 0}, {flag: 'Eritrea.png', flipped: false, matched: false, id: 0},
    {flag: 'Ethipoia.png', flipped: false, matched: false, id: 0}, {flag: 'Gabon.png', flipped: false, matched: false, id: 0}, {flag: 'Gambia.png', flipped: false, matched: false, id: 0},
    {flag: 'Ghana.png', flipped: false, matched: false, id: 0}, {flag: 'Guinea.png', flipped: false, matched: false, id: 0},
    {flag: 'Guinea-Bissau.png', flipped: false, matched: false, id: 0}, {flag: 'Kenya.png', flipped: false, matched: false, id: 0},
    {flag: 'Lesotho.png', flipped: false, matched: false, id: 0}, {flag: 'Liberia.png', flipped: false, matched: false, id: 0}, {flag: 'Libya.png', flipped: false, matched: false, id: 0},
    {flag: 'Madagascar.png', flipped: false, matched: false, id: 0}, {flag: 'Malawi.png', flipped: false, matched: false, id: 0}, {flag: 'Mali.png', flipped: false, matched: false, id: 0},
    {flag: 'Mauritania.png', flipped: false, matched: false, id: 0}, {flag: 'Mauritius.png', flipped: false, matched: false, id: 0},
    {flag: 'Morocco.png', flipped: false, matched: false, id: 0}, {flag: 'Mozambique.png', flipped: false, matched: false, id: 0},
    {flag: 'Namibia.png', flipped: false, matched: false, id: 0}, {flag: 'Niger.png', flipped: false, matched: false, id: 0},
    {flag: 'Sao-Tome-and-Principe.png', flipped: false, matched: false, id: 0}, {flag: 'Republic-of-Congo.png', flipped: false, matched: false, id: 0},
    {flag: 'Rwanda.png', flipped: false, matched: false, id: 0}, {flag: 'Senegal.png', flipped: false, matched: false, id: 0},
    {flag: 'Seychelles.png', flipped: false, matched: false, id: 0}, {flag: 'Somalia.png', flipped: false, matched: false, id: 0},
    {flag: 'South-Africa.png', flipped: false, matched: false, id: 0}, {flag: 'South-Sudan.png', flipped: false, matched: false, id: 0},
    {flag: 'Swaziland.png', flipped: false, matched: false, id: 0}, {flag: 'Sudan.png', flipped: false, matched: false, id: 0},
    {flag: 'Tanzania.png', flipped: false, matched: false, id: 0}, {flag: 'Togo.png', flipped: false, matched: false, id: 0}, {flag: 'Uganda.png', flipped: false, matched: false, id: 0},
    {flag: 'Western-Sahara.png', flipped: false, matched: false, id: 0}, {flag: 'Zambia.png', flipped: false, matched: false, id: 0},
    {flag: 'Zimbabwe.png', flipped: false, matched: false, id: 0}, {flag: 'Tunisia.png', flipped: false, matched: false, id: 0},
    {flag: 'Sierra-Leone.png', flipped: false, matched: false, id: 0}
  ];

  constructor() { }

  getFrontCard() {
    return this.frontCard;
  }

  createPairs(array: CardModel[]) {
    const cloned = array.map(x => Object.assign({}, x));
    const pairedArray = array.concat(cloned);

    return pairedArray;
  }

  shuffle(array: CardModel[]) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  addIndex(array: CardModel[]) {
    array.forEach((item, index) => {
      item.id = index;
    });
    return array;
  }
}

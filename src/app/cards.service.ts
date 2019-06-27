import { Injectable } from '@angular/core';
import {CardModel} from './card/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  frontCard = [
    {flag: 'Algeria.png', flipped: false, matched: false}, {flag: 'Angola.png', flipped: false, matched: false}, {flag: 'Benin.png', flipped: false, matched: false},
    {flag: 'Botswana.png', flipped: false, matched: false}, {flag: 'Burkina-Faso.png', flipped: false, matched: false},
    {flag: 'Burundi.png', flipped: false, matched: false}, {flag: 'Cameroon.png', flipped: false, matched: false},
    {flag: 'Cape-Verde.png', flipped: false, matched: false}, {flag: 'Central-African-Republic.png', flipped: false, matched: false},
    {flag: 'Chad.png', flipped: false, matched: false}, {flag: 'Comoros.png', flipped: false, matched: false},
    {flag: 'Cote-dIvoire.png', flipped: false, matched: false}, {flag: 'Djibouti.png', flipped: false, matched: false},
    {flag: 'DRC.png', flipped: false, matched: false}, {flag: 'Egypt.png', flipped: false, matched: false},
    {flag: 'Equatorial-Guniea.png', flipped: false, matched: false}, {flag: 'Eritrea.png', flipped: false, matched: false},
    {flag: 'Ethipoia.png', flipped: false, matched: false}, {flag: 'Gabon.png', flipped: false, matched: false}, {flag: 'Gambia.png', flipped: false, matched: false},
    {flag: 'Ghana.png', flipped: false, matched: false}, {flag: 'Guinea.png', flipped: false, matched: false},
    {flag: 'Guinea-Bissau.png', flipped: false, matched: false}, {flag: 'Kenya.png', flipped: false, matched: false},
    {flag: 'Lesotho.png', flipped: false, matched: false}, {flag: 'Liberia.png', flipped: false, matched: false}, {flag: 'Libya.png', flipped: false, matched: false},
    {flag: 'Madagascar.png', flipped: false, matched: false}, {flag: 'Malawi.png', flipped: false, matched: false}, {flag: 'Mali.png', flipped: false, matched: false},
    {flag: 'Mauritania.png', flipped: false, matched: false}, {flag: 'Mauritius.png', flipped: false, matched: false},
    {flag: 'Morocco.png', flipped: false, matched: false}, {flag: 'Mozambique.png', flipped: false, matched: false},
    {flag: 'Namibia.png', flipped: false, matched: false}, {flag: 'Niger.png', flipped: false, matched: false},
    {flag: 'Sao-Tome-and-Principe.png', flipped: false, matched: false}, {flag: 'Republic-of-Congo.png', flipped: false, matched: false},
    {flag: 'Rwanda.png', flipped: false, matched: false}, {flag: 'Senegal.png', flipped: false, matched: false},
    {flag: 'Seychelles.png', flipped: false, matched: false}, {flag: 'Somalia.png', flipped: false, matched: false},
    {flag: 'South-Africa.png', flipped: false, matched: false}, {flag: 'South-Sudan.png', flipped: false, matched: false},
    {flag: 'Swaziland.png', flipped: false, matched: false}, {flag: 'Sudan.png', flipped: false, matched: false},
    {flag: 'Tanzania.png', flipped: false, matched: false}, {flag: 'Togo.png', flipped: false, matched: false}, {flag: 'Uganda.png', flipped: false, matched: false},
    {flag: 'Western-Sahara.png', flipped: false, matched: false}, {flag: 'Zambia.png', flipped: false, matched: false},
    {flag: 'Zimbabwe.png', flipped: false, matched: false}, {flag: 'Tunisia.png', flipped: false, matched: false},
    {flag: 'Sierra-Leone.png', flipped: false, matched: false}
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
}

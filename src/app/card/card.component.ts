import { Component, OnInit } from '@angular/core';
import {CardsService} from '../cards.service';
import {CardModel} from './card.model';
import {TimerService} from '../timer.service';
import {TimerComponent} from '../timer/timer.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  frontCard: CardModel[] = [];

  counter = 0;
  turns = 0;
  time = 0;

  back = 'africa.png';

  lock = false;
  flipped = false;
  first: any = {};
  second: any = {};
  matchedPairs = 0;

  constructor(private cardService: CardsService, private timerService: TimerService, private timerComponent: TimerComponent) { }

  ngOnInit() {
    this.frontCard = this.cardService.shuffle(this.cardService.getFrontCard());
    this.frontCard.splice(15);
    this.frontCard = this.cardService.shuffle(this.cardService.addIndex(this.cardService.createPairs(this.frontCard)));
    for (const [i, card] of Object.entries(this.frontCard)) {
      console.log(parseInt(i) + 1, card.flag);
    }
    this.counter = this.timerComponent.getCounterValue();
  }

  resetFlips() {
    setTimeout(() => {
    [this.first.flipped, this.second.flipped] = [false, false];
    [this.first, this.second] = [{}, {}];
    this.lock = false;
    }, 900);
  }

  flipCard(card: CardModel) {
    if (this.lock || card.matched ) {
      return;
    }
    card.flipped = !card.flipped;
    if (!this.first.hasOwnProperty('flag')) {
      this.first = card;
    } else if (!this.second.hasOwnProperty('flag')) {
      if (this.first.id === card.id) {
        this.turns++;
        return;
      }
      this.second = card;
    }
    if (this.first.hasOwnProperty('flag') && this.second.hasOwnProperty('flag')) {
      this.turns++;
      if (this.first.flag !== this.second.flag) {
        this.lock = true;
        this.resetFlips();
      } else if (this.first.flag === this.second.flag) {
        this.matchedPairs++;
        if (this.matchedPairs === 15) {
          this.time = 120 - this.timerService.getCounter();
          this.timerService.stop = true;
        }
        [this.first.matched, this.second.matched] = [true, true];
        [this.first, this.second] = [{}, {}];
      }
    }
  }

  gameOver(cards) {
    for (const card of cards) {
      card.flipped = true;
      card.matched = true;
    }
  }

  getCounterValue() {
    this.counter = this.timerService.getCounter();
    return this.counter;
  }

  resetGame() {
    window.location.reload();
  }

}

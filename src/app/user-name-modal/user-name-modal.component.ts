import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {User} from '../user';
import {HighscoreService} from '../highscore.service';

@Component({
  selector: 'app-user-name-modal',
  templateUrl: './user-name-modal.component.html',
  styleUrls: ['./user-name-modal.component.css']
})
export class UserNameModalComponent implements OnInit {

  closeResult: string;
  userName = '';
  time = 0;
  flips = 0;
  gameStatus = false;

  constructor(private modalService: NgbModal, private highScoreService: HighscoreService) {}

  userModel = new User('', 20, 56);
  submitted = false;

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', backdrop: 'static'});
  }

  ngOnInit() {}

  saveDetails() {
    console.log('User details saved: ' + this.userName);
  }

  onSubmit() {
    this.submitted = true;
    this.setGameStatus();
    this.highScoreService.saveScore(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error', error)
      );
  }

  setGameStatus() {
    this.highScoreService.gameStatus = true;
    this.gameStatus = this.highScoreService.getGameStatus();
    console.log(`Game On!!! ${this.highScoreService.gameStatus}`);
  }
}

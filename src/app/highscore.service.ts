import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HighscoreService {

  url = 'http://localhost:3000/savescore';
  gameStatus = false;

  constructor(private http: HttpClient) { }

  saveScore(user: User) {
    return this.http.post<any>(this.url, user);
  }

  getGameStatus() {
    return this.gameStatus;
  }
}

import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-browser-games',
  templateUrl: './browser-games.component.html',
  styleUrl: './browser-games.component.scss',
})
export class BrowserGamesComponent implements OnInit {
  gamesData: Game[] = [];

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameService.getBrowserGames().subscribe((data) => {
      this.gamesData = this.gamesData.concat(data);
    });
  }
}

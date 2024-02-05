import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-browser-games',
  templateUrl: './browser-games.component.html',
  styleUrl: './browser-games.component.scss',
})
export class BrowserGamesComponent implements OnInit {
  gamesData: any;

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameService.getBrowserGames().subscribe((data) => {
      this.gamesData = data;
    });
  }
}

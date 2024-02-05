import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-pc-games',
  templateUrl: './pc-games.component.html',
  styleUrl: './pc-games.component.scss',
})
export class PcGamesComponent implements OnInit {
  gamesData: Game[] = [];

  constructor(private gameService: GamesService) {}
  ngOnInit(): void {
    this.gameService.getPcGames().subscribe((data) => {
      this.gamesData = this.gamesData.concat(data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrl: './all-games.component.scss',
})
export class AllGamesComponent implements OnInit {
  gamesData: Game[] = [];

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe((data) => {
      this.gamesData = this.gamesData.concat(data);
    });
  }
}

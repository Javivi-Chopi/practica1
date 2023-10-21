import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/core/services/players/player.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {

  
  constructor(public players: PlayerService) { }

  ngOnInit() {
    this.players.getAll().subscribe()
  }
}

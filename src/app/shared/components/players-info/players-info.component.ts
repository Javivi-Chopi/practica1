import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/core/interfaces/player';
import { PlayerService } from 'src/app/core/services/players/player.service';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.scss'],
})
export class PlayersInfoComponent  implements OnInit {

  @Input() player: Player | null = null

  constructor() { }

  ngOnInit() {}

}

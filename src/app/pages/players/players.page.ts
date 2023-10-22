import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Player } from 'src/app/core/interfaces/player';
import { PlayerService } from 'src/app/core/services/players/player.service';
import { PlayerFormComponent } from 'src/app/shared/components/player-form/player-form.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  constructor(public players: PlayerService, public modal: ModalController) {}

  ngOnInit() {
    this.players.getAll().subscribe();
  }

  presentForm(player: Player | null, onDismiss: (result: any) => void) {
    this.modal
      .create({
        component: PlayerFormComponent,
        componentProps: {
          mode: player ? "Edit": "Add",
          player: player,
        },
        cssClass: 'modal-full-right-side',
      })
      .then((modal) => {
        modal.present();
        modal.onDidDismiss().then((result) => {
          if (result && result.data) {
            onDismiss(result);
          }
        });
      });
  }

  onCardClicked(player: Player) {
    var onDismiss = (info: any) => {
      switch (info.role) {
        case 'ok': {
          this.players.updatePlayer(info.data).subscribe();
        }
          break;
      }
    };
    this.presentForm(player, onDismiss);
  }

  addPlayer(){
    var onDismiss = (info: any) => {
      switch (info.role) {
        case 'ok': {
          this.players.addPlayer(info.data).subscribe();
        }
          break;
      }
    };
    this.presentForm(null, onDismiss);
  }
}

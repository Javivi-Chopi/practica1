import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModalController, ToastController, ToastOptions } from '@ionic/angular';
import { Player } from 'src/app/core/interfaces/player';
import { PlayerService } from 'src/app/core/services/players/player.service';
import { PlayerFormComponent } from 'src/app/shared/components/player-form/player-form.component';

@Component({
  selector: 'app-players-about',
  templateUrl: './players-about.page.html',
  styleUrls: ['./players-about.page.scss'],
})
export class PlayersAboutPage implements OnInit/* , OnChanges */ {
  id: number | null = null
  player: Player | null = null
  exists: boolean | null = null

  constructor(
    public playerService: PlayerService, 
    private _route: ActivatedRoute, 
    public modal: ModalController, 
    private _router: Router,
    private _toast: ToastController
    ) { }

  // We use this method, because we want to update the player in the page, so we set the Update player data on our actual player
  /* ngOnChanges(changes: SimpleChanges): void {
    if (changes['player']) {
      this.player = changes['player'].currentValue;
    }
  } */

  ngOnInit() {
    // We subscribe at ready because we need the data, if we go directly to the route it dont load 
    this.playerService.ready$.subscribe(ready=>{
      if(ready){
        // We take the param
        this.id = Number(this._route.snapshot.paramMap.get("id"));
        // That param we use to know the player
        this.playerService.getPlayer(this.id).subscribe(
          {
            next: player => {
              this.player = player
              this.exists = true
            },
            error: error => {
              this.exists = false
            }
        });
      }
    });
  }

  presentForm(player: Player | null, onDismiss: (result: any) => void) {
    this.modal
      .create({
        component: PlayerFormComponent,
        componentProps: {
          mode: player ? "Edit": "Add",
          player: player,
        },
        cssClass: 'modalPage'
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

  toPlayers(){
    this._router.navigate(["players"])
  }

  onEditClicked(player: Player) {
    var onDismiss = (info: any) => {
      switch (info.role) {
        case 'ok': {
          this.playerService.updatePlayer(info.data).subscribe(updatedPlayer => {
            // We change the player value, so the ngOnChange detect it and change the player value
            this.player = updatedPlayer;
          });
        }
          break;
        case 'delete': {
          this.playerService.deletePlayer(info.data).subscribe({
            next: _ => {
              this._router.navigate(["players"])

              var toastOptions: ToastOptions = {
                message: `El jugador ${this.player?.name} AKA ${this.player?.inGameName} ha sido eliminado correctamente`,
                position: 'bottom',
                color: 'danger',
                duration: 3000,
              }
              this._toast.create(toastOptions).then(toast => toast.present())
            },
            error: _ => {
              this._router.navigate(["players"])

              var toastOptions: ToastOptions = {
                message: `El jugador ${this.player?.name} AKA ${this.player?.inGameName} no ha podido ser eliminado`,
                position: 'bottom',
                color: 'danger',
                duration: 3000,
              }
              this._toast.create(toastOptions).then(toast => toast.present())
            }
          }
          );
        }
      }
    };
    this.presentForm(player, onDismiss);
  }
}

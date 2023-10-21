import { NgModule } from '@angular/core';
import { PlayersPageRoutingModule } from './players-routing.module';
import { PlayersPage } from './players.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, PlayersPageRoutingModule],
  declarations: [PlayersPage],
})
export class PlayersPageModule {}

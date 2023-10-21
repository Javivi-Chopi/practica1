import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _menu: MenuController, private _router: Router) {}

  about(){
    this._router.navigate(["about"])
    this._menu.close();
  }

  home(){
    this._router.navigate(["home"])
    this._menu.close();
  }

  players(){
    this._router.navigate(["players"])
    this._menu.close();
  }
}

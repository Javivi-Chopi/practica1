import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  constructor(private _menu: MenuController, private _router: Router) {}
  ngOnInit(): void {
  }

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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {}

  about(){
    this._router.navigate(["about"])
  }

  home(){
    this._router.navigate(["home"])
  }

  players(){
    this._router.navigate(["players"])
  }
}

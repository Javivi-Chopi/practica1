import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/core/interfaces/about';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss'],
})
export class AboutInfoComponent  implements OnInit {

  constructor() { }

  @Input() author: About | null = null

  ngOnInit() {}

}

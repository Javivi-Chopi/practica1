import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/core/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    public about: AboutService
  ) { }

  ngOnInit() {
    this.about.getAuthors().subscribe()
  }

}

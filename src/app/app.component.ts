import { Component, OnInit } from '@angular/core';
import { Surge } from './surge';
import { SURGES } from './surges';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wild Magic Generator';
  surges = SURGES;
  surge: Surge;
  clicked = false;

  getRandomSurge() {
    this.surge =  this.surges[Math.floor(Math.random() * this.surges.length)];
    this.clicked = true;
  }
}

import {Component} from '@angular/core';
import {SURGES} from './surges';
import {Surge} from './surge';
import {AppMaterialModule} from './app-material.module';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AppMaterialModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Wild Magic Generator';
  surges = SURGES;
  surge: Surge;
  clicked = false;

  getRandomSurge() {
    this.surge = this.surges[Math.floor(Math.random() * this.surges.length)];
    this.clicked = true;
  }
}


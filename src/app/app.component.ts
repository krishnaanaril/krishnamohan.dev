import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = "Krishna Mohan's portfolio";
  displayMenu: boolean;

  constructor() {
    this.displayMenu = false;
  }

  closeMenu() {
    this.displayMenu = false;
  }

  openMenu() {
    this.displayMenu = true;
  }
}

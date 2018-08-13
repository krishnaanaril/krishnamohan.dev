import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Krishna Mohan\'s portfolio';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'home',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/baseline-home-24px.svg'));
  }
}

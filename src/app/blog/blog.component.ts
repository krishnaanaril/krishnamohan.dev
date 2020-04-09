import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit {

  current$: Observable<any> = this.scully.getCurrent();

  ngOnInit() {
    this.current$.subscribe((route) => {
      console.log(route);
    });
  }

  constructor(private router: Router, private route: ActivatedRoute,
    private scully: ScullyRoutesService) {}
}

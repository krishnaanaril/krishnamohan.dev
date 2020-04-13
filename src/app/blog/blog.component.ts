import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { MetaService } from '../meta.service';

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

  ngOnInit() { }

  constructor(private router: Router, private route: ActivatedRoute,
    private scully: ScullyRoutesService,
    private metaService: MetaService) {
    this.current$.subscribe((blog: ScullyRoute) => {
      this.metaService.setMetaForCurrentPage({
        title: blog.title,
        description: blog.description,
        imageUrl: 'assets/images/dp.jpg',
        keywords: 'Blog, Portfolio, Developer, Engineer',
        siteUrl: blog.route,
        type: 'website'
      });
    });
  }
}

import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable, Subscription } from 'rxjs';
import { MetaService } from '../meta.service';
import { MetaData } from '../meta-data.model';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  current$: Observable<any> = this.scully.getCurrent();
  metaData: MetaData;

  ngOnInit() {
    this.subscriptions.add(
      this.current$.subscribe((blog: ScullyRoute) => {
        this.metaData = {
          title: blog.title,
          description: blog.description,
          date: blog.date,
          category: blog.category ? blog.category : '',
          imageUrl: blog.image ? blog.image : '',
          keywords: blog.keywords
            ? blog.keywords.split(',').map((elem) => elem.trim())
            : [],
          siteUrl: blog.route,
          type: 'website',
        };
        this.metaService.setMetaForCurrentPage(this.metaData);
      })
    );
  }

  constructor(    
    private scully: ScullyRoutesService,
    private metaService: MetaService
  ) {}

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

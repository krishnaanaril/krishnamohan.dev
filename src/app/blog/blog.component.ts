import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnDestroy,
  AfterViewChecked,
} from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable, pipe, ReplaySubject } from 'rxjs';
import { MetaService } from '../meta.service';
import { MetaData } from '../meta-data.model';
import { takeUntil } from 'rxjs/operators';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  current$: Observable<any> = this.scully.getCurrent();

  constructor(
    private scully: ScullyRoutesService,
    private metaService: MetaService
  ) { }

  ngOnInit() {
    this.current$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (blog: ScullyRoute) => this.setMetaDataInPage(blog)
      );
  }

  /**
   * Set metadata tags in page's html
   * @param blog - ScullyRoute object
   */
  setMetaDataInPage(blog: ScullyRoute): void {
    const metaData: MetaData = this.getMetaDataFromBlogRoute(blog);
    this.metaService.setMetaForCurrentPage(metaData);
  }

  /**
   * Returns MetaData object mapping from ScullyRoute
   * @param blog - ScullyRoute object
   */
  getMetaDataFromBlogRoute(blog: ScullyRoute): MetaData {
    const metaData: MetaData = {
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
    return metaData;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

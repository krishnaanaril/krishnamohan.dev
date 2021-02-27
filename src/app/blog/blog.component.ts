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
import { CodeHighlightService } from '../code-highlight.service';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit, AfterViewChecked, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  current$: Observable<any> = this.scully.getCurrent();
  metaData: MetaData;

  constructor(
    private scully: ScullyRoutesService,
    private metaService: MetaService, 
    private highlightService: CodeHighlightService
  ) { }

  ngOnInit() {
    this.current$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (blog: ScullyRoute) => this.setMetaDataInPage(blog)
      );
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  /**
   * Set metadata tags in page's html
   * @param blog - ScullyRoute object
   */
  setMetaDataInPage(blog: ScullyRoute): void {
    this.metaData = this.getMetaDataFromBlogRoute(blog);
    this.metaService.setMetaForCurrentPage(this.metaData);
  }

  /**
   * Returns MetaData object mapping from ScullyRoute
   * @param blog - ScullyRoute object
   */
  getMetaDataFromBlogRoute(blog: ScullyRoute): MetaData {
    const metaData: MetaData = {
      title: blog.title,
      description: blog.description,
      date: blog.publishedAt,
      category: blog.category ? blog.category : '',
      imageUrl: blog.image ? blog.image : '',
      keywords: blog.keywords
        ? blog.keywords.map((elem) => elem.trim())
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

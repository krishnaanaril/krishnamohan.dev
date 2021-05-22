import { AfterViewChecked, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CodeHighlightService } from 'src/app/code-highlight.service';
import { MetaData } from 'src/app/meta-data.model';
import { MetaService } from 'src/app/meta.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogPostComponent implements OnInit, AfterViewChecked, OnDestroy {
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
      type: 'article', 
      blogDetails: {
        published_time: blog.publishedAt,
        modified_time: blog.updatedAt,
        author: blog.authors.join(', '),
        section: 'Tech',
        tag: blog.keywords.join(', ')
      }      
    };
    return metaData;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

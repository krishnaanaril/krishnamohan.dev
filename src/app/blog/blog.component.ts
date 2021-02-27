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
import { ScullyContentService } from '../scully-content.service';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']  
})
export class BlogComponent {

  links$: Observable<any>;

  constructor(
    private scully: ScullyContentService,
    private metaService: MetaService
  ) { }

  ngOnInit() {
    this.links$ = this.scully.blogPosts();
  }
  
}

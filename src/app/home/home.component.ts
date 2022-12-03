import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MetaService } from '../meta.service';
import { ScullyContentService } from '../scully-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  links$: Observable<any>;

  constructor(
    private scully: ScullyContentService,
    private metaService: MetaService
  ) { }

  ngOnInit(): void {
    this.metaService.setMetaForCurrentPage({
      title: 'Krishna Mohan A M',
      description:
        "I'm a Full Stack Developer, who works mainly in Microsoft stack. Angular, Dotnet Core and Sql Server are my primary weapons.",
      imageUrl: '/assets/dp.jpg',
      date: '',
      keywords: ['Blog, Portfolio, Developer, Engineer, krishnaanaril'],
      siteUrl: 'https://krishnamohan.dev',
      type: 'website',
    });
    this.links$ = this.scully.blogPosts().pipe(tap(x => console.info(x)));
  }
}

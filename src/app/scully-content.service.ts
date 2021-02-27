import { Injectable } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScullyContentService {

  constructor(private scully: ScullyRoutesService) { }

  blogPosts(): Observable<ScullyRoute[]> {
    return this.scully.available$.pipe(
      map((links: ScullyRoute[]) => this.sortPostsByDate(links))
    );
  }

  sortPostsByDate(links: ScullyRoute[]) {
    links.sort((a, b) => {
      const aDate = new Date(a.publishedAt);
      const bDate = new Date(b.publishedAt);
      if (aDate < bDate) return 1;
      if (aDate > bDate) return -1;
      return 0;
    });          
    return links;
  }
}

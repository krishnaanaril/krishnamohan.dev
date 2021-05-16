import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetaData } from './meta-data.model';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private meta: Meta, private title: Title) {}

  setMetaForCurrentPage(metaData: MetaData) {
    // Primary Meta Tags
    this.title.setTitle(metaData.title);
    this.meta.updateTag({ name: 'title', content: metaData.title });
    this.meta.updateTag({ name: 'description', content: metaData.description });
    // Open Graph / Facebook
    this.meta.updateTag({ name: 'og:type', content: metaData.type });
    this.meta.updateTag({ name: 'og:url', content: metaData.siteUrl });
    this.meta.updateTag({ name: 'og:title', content: metaData.title });
    this.meta.updateTag({ name: 'og:description', content: metaData.description });
    this.meta.updateTag({ name: 'og:image', content: metaData.imageUrl });
    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:url', content: metaData.siteUrl });
    this.meta.updateTag({ name: 'twitter:title', content: metaData.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: metaData.description,
    });
    this.meta.updateTag({ name: 'twitter:image', content: metaData.imageUrl });
    this.meta.updateTag({ name: 'twitter:site', content: '@krishnaanaril' });
    this.meta.updateTag({ name: 'twitter:creator', content: '@krishnaanaril' });
    // Optional
    this.meta.updateTag({
      name: 'keywords',
      content: metaData.keywords.join(', '),
    });
    
    if(metaData.blogDetails) {
      this.meta.updateTag({ name: 'og:article:published_time', content: metaData.blogDetails?.published_time});
      this.meta.updateTag({ name: 'og:article:modified_time', content: metaData.blogDetails?.modified_time});
      this.meta.updateTag({ name: 'og:article:author', content: metaData.blogDetails?.author});
      this.meta.updateTag({ name: 'og:article:section', content: metaData.blogDetails?.section});
      this.meta.updateTag({ name: 'og:article:tag', content: metaData.blogDetails?.tag});
    } else {
      this.meta.removeTag('property="og:article:published_time');
      this.meta.removeTag('property="og:article:modified_time');
      this.meta.removeTag('property="og:article:author');
      this.meta.removeTag('property="og:article:section');
      this.meta.removeTag('property="og:article:tag');
    }
  }
}

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
    this.meta.addTag({ name: 'title', content: metaData.title });
    this.meta.addTag({ name: 'description', content: metaData.description });
    // Open Graph / Facebook
    this.meta.addTag({ name: 'og:type', content: metaData.type });
    this.meta.addTag({ name: 'og:url', content: metaData.siteUrl });
    this.meta.addTag({ name: 'og:title', content: metaData.title });
    this.meta.addTag({ name: 'og:description', content: metaData.description });
    this.meta.addTag({ name: 'og:image', content: metaData.imageUrl });
    // Twitter
    this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.addTag({ name: 'twitter:url', content: metaData.siteUrl });
    this.meta.addTag({ name: 'twitter:title', content: metaData.title });
    this.meta.addTag({
      name: 'twitter:description',
      content: metaData.description,
    });
    this.meta.addTag({ name: 'twitter:image', content: metaData.imageUrl });
    this.meta.addTag({ name: 'twitter:site', content: '@krishnaanaril' });
    this.meta.addTag({ name: 'twitter:creator', content: '@krishnaanaril' });
    // Optional
    this.meta.addTag({
      name: 'keywords',
      content: metaData.keywords.join(', '),
    });
  }
}

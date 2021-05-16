export class MetaData {
  title: string;
  description: string;
  type?: string;
  imageUrl?: string;
  keywords?: string[];
  siteUrl?: string;
  date: string;
  category?: string;
  blogDetails?: BlogMeta;
}

export interface BlogMeta {
  published_time: string;
  modified_time: string;
  expiration_time?: string;
  author: string;
  section: string;
  tag: string;
}

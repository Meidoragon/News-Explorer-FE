export interface NewsArticle {
  source?: {
    id: string;
    name: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: URL;
  urlToImage?: string;
  content?: string;
  publishedAt?: Date;
}

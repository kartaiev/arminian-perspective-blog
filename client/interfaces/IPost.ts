export interface IPost {
  _id?: string;
  title?: string;
  subtitle?: string;
  publishedAt?: string;
  _updatedAt?: string;
  slug?: { current: string };
  mainImage?: string;
  categories?: string[];
  name?: string;
  body?: object;
}

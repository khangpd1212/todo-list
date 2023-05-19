import { User } from "../../auth/state/AuthState";

export interface Article {
  id?: number;
  slug: string;
  title: string;
  description: string;
  body: string;
  created?: number;
  updated?: number;
  tagList: string[];
  favoriteCount: number;
  author?: User;
  comments?: string[];
}
export interface RequestTask {
  slug: string;
  articleData: RequestArticle;
}
export interface RequestArticle {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}
export interface Task {
  articles: Article[];
  article?: Article;
  articlesCount: number;
}

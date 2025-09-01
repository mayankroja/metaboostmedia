// app/blog/types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  slug: string;
  image: string;
  readTime: number;
  author: string;
}

export interface BlogPageProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
}
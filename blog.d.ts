export interface DefaultProps {
  children: React.ReactNode
}
export interface Category {
  cat_id: number,
  category_name: string,
  created_at: string
}
export interface Article {
  post_id: number,
  title: string,
  slug: string,
  imageUrl: string,   
  description: string,
  content: string,
  author: string,
  featured: number,
  created_at: string,
  category_name: string
}

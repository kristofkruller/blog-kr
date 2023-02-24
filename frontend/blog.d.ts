export interface Article {
  id: number,
  attributes: {
    title: string, 	
    description: string,
    content: string,
    slug: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    category: any,
    image: any,
    author: any 
  }
}
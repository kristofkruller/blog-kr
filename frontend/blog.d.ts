export interface DefaultProps {
  children: React.ReactNode
}

export interface Article {
  id: number;
  attributes: {
    title: string; 	
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    categories: Category;
    image: Img;
    author: Author;
  }
}
export interface Author {
  data: {
    id: number,
    attributes: {
      email: string;
      name: string;
    }
  }
}
export interface Category {
  data: [{
    id: number,
    attributes: {
      name: string;
      slug: string;
    }
  }]
}
export interface DefaultMeta {
  data: {
    id: number,
    attributes: {
      siteName?: string;
      hero?: {
        title: string;
      }
      seo: {
        metaTitle: string;
        metaDescription: string;
      }
      favicon: Img;
      shareImage?: Img;
    }
  };
}

export interface Img {
  data: {
    id: number,
    attributes: {
      name: string,
      width: number,
      height: number,
      hash: string,
      url: string,
      alternativeText: string,
    }
  }
}
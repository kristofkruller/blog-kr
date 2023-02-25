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
    category: any;
    image: Img;
    author: any;
  }
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
    }
  }
}
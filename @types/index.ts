export interface Article {
    id: string;
    title: string;
    body: string;
    updatedAt: Date;

    previousArticle: {
      id: string;
      title: string;
    } | null,
    nextArticle: {
      id: string;
      title: string;
    } | null
}

export interface Articles {
  nodes: Array<{
    id: string;
    title: string;
    body: string;
    updatedAt: Date;
  }>;

  pageInfo: PageInfo;
}

export interface PageInfo {
  page: number
  paginationLength: number;
  hasNextPage: boolean
  hasPreviousPage: boolean;
}

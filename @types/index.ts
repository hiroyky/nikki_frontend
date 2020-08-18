export interface Article {
    id: string;
    title: string;
    body: string;
    updatedAt: Date;
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

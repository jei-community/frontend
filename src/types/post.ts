export interface User {
  id: string;
  profileImageUrl: string | null;
  name: string;
  role: string;
}

export interface Board {
  id: string;
  date: Date;
  title: string;
  content: string;
}

export interface PostItem {
  user: User;
  board: Board;
}

export interface Pagination {
  totalCount: number;
  page: number;
  limit: number;
  hasNext: boolean;
}

export interface DummyData {
  data: PostItem[];
  pagination: Pagination;
}

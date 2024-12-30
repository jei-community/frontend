export interface FileInfo {
  name: string;
  size: string;
  type: string;
  file: File; // 실제 파일 객체 추가
  imageUrl?: string;
}

export interface User {
  id: string;
  profileImageUrl: string | null;
  name: string;
  role: string;
}

export interface Album {
  id: string;
  content: string;
  createdAt: Date;
  albumImageList: string[];
}

export interface DataItem {
  user: User;
  albums: Album;
}

export interface Pagination {
  totalCount: number;
  page: number;
  limit: number;
  hasNext: boolean;
}

export interface DummyData {
  data: DataItem[];
  pagination: Pagination;
}

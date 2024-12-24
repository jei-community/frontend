export type Status = 'LIVE' | 'DEVELOP' | 'STOP';
export type StatusText = '서비스' | '개발' | '서비스 중단';

export interface TechStackData {
  url: string;
  tag: string;
}

export interface TechStackItem {
  position: string;
  data: TechStackData[];
}

export interface LinkItem {
  url: string[];
  tag: string;
}

export interface ProjectDetails {
  id: string;
  title: string;
  status: Status;
  description: string;
  startDate: string;
  endDate: string;
  metadata: {
    tech: TechStackItem[];
    link: LinkItem[];
  };
  thumbnailImageUrl: string;
}

interface Pagination {
  totalCount: number;
  page: number;
  limit: number;
  hasNext: boolean;
}

export type ProjectListData = Omit<ProjectDetails, 'metadata'>[];

export interface ProjectList {
  data: ProjectListData;
  pagination: Pagination;
}

export type LinkType = 'gitlab' | 'figma' | 'xd' | 'presentation' | 'spreadsheet';

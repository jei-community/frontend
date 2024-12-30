import { PROJECT_RES } from 'everydei-api-dev/lib/dtos/project/project.response.dto';

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

export type LinkType = 'gitlab' | 'figma' | 'xd' | 'presentation' | 'spreadsheet';

export type Url = {
  id: string;
  url: string;
};

export interface LinkItem {
  id: string;
  url: Url[];
  tag: LinkType;
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

export interface Pagination {
  totalCount: number;
  page: number;
  limit: number;
  hasNext: boolean;
}

export type ProjectListData = PROJECT_RES.IProjectListDto[];

export interface ProjectList {
  data: ProjectListData;
  pagination: Pagination;
}

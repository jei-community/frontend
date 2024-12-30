import { getProjectDetail } from 'everydei-api-dev/lib/apis/functional/projects/details';
import { getProjectParticipantList } from 'everydei-api-dev/lib/apis/functional/projects/participants';
import { PROJECT_RES } from 'everydei-api-dev/lib/dtos/project/project.response.dto';
import { ProjectAssetEntity } from 'everydei-api-dev/lib/entities/project/project-asset.entity';

export type Status = 'LIVE' | 'DEVELOP' | 'STOP';
export type StatusText = '서비스' | '개발' | '서비스 중단';

export type TechStackItem = PROJECT_RES.ProjectDetail.IProjectMetadataInput[] | null | undefined;
export type LinkItem = PROJECT_RES.ProjectDetail.IProjectMetadataInput[] | null | undefined;
export type ProjectAsset = Omit<ProjectAssetEntity, 'createdAt' | 'updatedAt' | 'deletedAt'>;
export type Members = getProjectParticipantList.Output;

export type LinkType = 'gitlab' | 'figma' | 'xd' | 'presentation' | 'sheet';

export type Url = {
  id: string;
  url: string;
};

export interface Link {
  id: string;
  items: string[];
}

export interface ProjectDetails {
  id: string;
  title: string;
  status: Status;
  description: string;
  startDate: string;
  endDate: string;
  metadata: Pick<getProjectDetail.Output, 'projectMetadata'>;
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

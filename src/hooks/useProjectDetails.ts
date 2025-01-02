import { getProjectDetail } from 'everydei-api-dev/lib/apis/functional/projects/details';
import { useParams } from 'react-router';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { useQuery } from '@tanstack/react-query';

export const useProjectDetails = () => {
  const { projectId } = useParams();
  const isEdit = Boolean(projectId);
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.PROJECT_DETAILS, projectId],
    queryFn: () => getProjectDetail(getNestiaHeader(), projectId ?? ''),
    enabled: isEdit,
  });

  return {
    title: data?.projectBaseInfo.title,
    thumbnailImageUrl: data?.projectBaseInfo.thumbnailImageUrl,
    status: data?.projectBaseInfo.status,
    startDate: data?.projectBaseInfo.startDate,
    endDate: data?.projectBaseInfo.endDate,
    description: data?.projectBaseInfo.description,
    frontend: data?.projectMetadata?.frontend,
    backend: data?.projectMetadata?.backend,
    links: data?.projectMetadata?.link,
    metadata: data?.projectMetadata,
    isEdit,
    isLoading,
  };
};

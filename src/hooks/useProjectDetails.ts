import { getProjectDetail } from 'everydei-api-dev/lib/apis/functional/projects/details';
import { useParams } from 'react-router';

import { BASE_URL } from '@/constants/api';

import { useQuery } from '@tanstack/react-query';

export const useProjectDetails = () => {
  const { projectId } = useParams();
  const isEdit = Boolean(projectId);
  const { data } = useQuery({
    queryKey: ['projectDetails', projectId],
    queryFn: () =>
      getProjectDetail(
        {
          host: BASE_URL,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
        projectId ?? '',
      ),
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
  };
};

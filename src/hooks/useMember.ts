import { getProjectParticipantList } from 'everydei-api-dev/lib/apis/functional/projects/participants';

import { BASE_URL } from '@/constants/api';

import { useSuspenseQuery } from '@tanstack/react-query';

interface Props {
  projectId?: string;
}

export const useMember = ({ projectId }: Props = {}) => {
  const { data } = useSuspenseQuery({
    queryKey: ['member', projectId],
    queryFn: () =>
      getProjectParticipantList(
        {
          host: BASE_URL,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
        {
          projectId,
        },
      ),
  });

  return { members: data };
};

import { getProjectParticipantList } from 'everydei-api-dev/lib/apis/functional/projects/participants';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { useSuspenseQuery } from '@tanstack/react-query';

interface Props {
  projectId?: string;
}

export const useMember = ({ projectId }: Props = {}) => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.MEMBER, projectId],
    queryFn: () =>
      getProjectParticipantList(getNestiaHeader(), {
        projectId,
      }),
  });

  return { members: data };
};

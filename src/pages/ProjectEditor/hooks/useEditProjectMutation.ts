import { putProject } from 'everydei-api-dev/lib/apis/functional/projects';
import { PROJECT_REQ } from 'everydei-api-dev/lib/dtos/project/project.request.dto';
import { useParams } from 'react-router';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { useMutation } from '@tanstack/react-query';

export const useEditProjectMutation = () => {
  const { projectId } = useParams();

  return useMutation({
    mutationKey: [QUERY_KEYS.PROJECT_LIST],
    mutationFn: async (body: PROJECT_REQ.Body.IPutProject) => {
      if (!projectId) return;

      return await putProject(getNestiaHeader(), projectId, body);
    },

    onError: () => alert('프로젝트 수정에 실패했습니다'),
  });
};

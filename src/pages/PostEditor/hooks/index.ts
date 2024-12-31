import { postProject } from 'everydei-api-dev/lib/apis/functional/projects';
import { PROJECT_REQ } from 'everydei-api-dev/lib/dtos/project/project.request.dto';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { useMutation } from '@tanstack/react-query';

export const useCreateProjectMutation = () => {
  const mutation = useMutation({
    mutationKey: [QUERY_KEYS.PROJECT_LIST],
    mutationFn: async (body: PROJECT_REQ.Body.IPostProject) => {
      return await postProject(getNestiaHeader(), body);
    },
    onError: () => alert('프로젝트 생성에 실패했습니다'),
  });

  return mutation;
};

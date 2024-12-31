import { deleteProject } from 'everydei-api-dev/lib/apis/functional/projects';

import { getNestiaHeader } from '@/utils/api';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteProjectMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteProject'],
    mutationFn: ({ projectId }: { projectId: string }) => {
      return deleteProject(getNestiaHeader(), projectId);
    },

    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['projectList'] }),
    onError: () => alert('프로젝트 삭제에 실패했습니다'),
  });
};

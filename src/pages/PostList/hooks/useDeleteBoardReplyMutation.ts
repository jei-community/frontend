import { deleteBoardReply } from 'everydei-api-dev/lib/apis/functional/boards/replies';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteBoardReplyMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [QUERY_KEYS.BOARD_LIST],
    mutationFn: async ({ boardId, replyId }: { boardId: string; replyId: number }) => {
      return await deleteBoardReply(getNestiaHeader(), boardId, replyId);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.BOARD_LIST] });
    },
    onError: () => alert('댓글 삭제에 실패했습니다'),
  });

  return mutation;
};

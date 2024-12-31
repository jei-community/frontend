import { postBoardReply } from 'everydei-api-dev/lib/apis/functional/boards/replies';
import { BOARD_REQ } from 'everydei-api-dev/lib/dtos/board/board.request.dto';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostBoardReplyMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [QUERY_KEYS.BOARD_LIST],
    mutationFn: async ({ itemId, body }: { itemId: string; body: BOARD_REQ.Body.ICreateBoardReply }) => {
      return await postBoardReply(getNestiaHeader(), itemId, body);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.BOARD_LIST] });
    },
    onError: () => alert('댓글 작성에 실패했습니다'),
  });

  return mutation;
};

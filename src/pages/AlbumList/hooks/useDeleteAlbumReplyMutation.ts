import { deleteAlbumReply } from 'everydei-api-dev/lib/apis/functional/albums/replies';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteAlbumReplyMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [QUERY_KEYS.ALBUM_LIST],
    mutationFn: async ({ albumId, replyId }: { albumId: string; replyId: number }) => {
      return await deleteAlbumReply(getNestiaHeader(), albumId, replyId);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ALBUM_LIST] });
    },
    onError: () => alert('댓글 삭제에 실패했습니다'),
  });

  return mutation;
};

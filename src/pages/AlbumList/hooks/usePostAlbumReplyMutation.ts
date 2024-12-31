import { postAlbumReply } from 'everydei-api-dev/lib/apis/functional/albums/replies';
import { ALBUM_REQ } from 'everydei-api-dev/lib/dtos/album/album.request.dto';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostAlbumReplyMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [QUERY_KEYS.ALBUM_LIST],
    mutationFn: async ({ itemId, body }: { itemId: string; body: ALBUM_REQ.Body.IPostAlbumReply }) => {
      return await postAlbumReply(getNestiaHeader(), itemId, body);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ALBUM_LIST] });
    },
    onError: () => alert('댓글 작성에 실패했습니다'),
  });

  return mutation;
};

import axios from 'axios';
import { postS3PresignedUrl } from 'everydei-api-dev/lib/apis/functional/aws/s3/presigned_url';
import { AWS_REQ } from 'everydei-api-dev/lib/dtos/aws/request.dto';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { useMutation } from '@tanstack/react-query';

export const usePresignedUrlMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.PRESIGNED_URL],
    mutationFn: async (body: AWS_REQ.Body.IPresignedUrl) => {
      return await postS3PresignedUrl(getNestiaHeader(), body);
    },
    onError: () => alert('presigned url 생성에 실패했습니다'),
  });
};

export const useUploadS3Mutation = () => {
  return useMutation({
    mutationFn: async ({ url, file }: { url: string; file: File }) => {
      return await axios.put(url, file, {
        headers: {
          'Content-Type': file.type,
        },
      });
    },
  });
};

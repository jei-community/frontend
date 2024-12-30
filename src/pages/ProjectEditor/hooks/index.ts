import { getProjectAssetList } from 'everydei-api-dev/lib/apis/functional/projects/assets';

import { BASE_URL } from '@/constants/api';

import { LINK_TYPES } from '@/pages/ProjectEditor/components/DocumentTooltipList/constants';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useProjectAssets = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['projectAssets'],
    queryFn: () =>
      getProjectAssetList({
        host: BASE_URL,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
  });

  return {
    techStackAssets: data.filter((asset) => (asset.tag ? !LINK_TYPES.includes(asset.tag) : false)),
    linkAssets: data.filter((asset) => (asset.tag ? LINK_TYPES.includes(asset.tag) : false)),
  };
};

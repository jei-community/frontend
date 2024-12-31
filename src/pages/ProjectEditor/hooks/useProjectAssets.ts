import { getProjectAssetList } from 'everydei-api-dev/lib/apis/functional/projects/assets';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { LINK_TYPES } from '@/pages/ProjectEditor/components/DocumentTooltipList/constants';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useProjectAssets = () => {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.PROJECT_ASSETS],
    queryFn: () => getProjectAssetList(getNestiaHeader()),
  });

  return {
    techStackAssets: data.filter((asset) => (asset.tag ? !LINK_TYPES.includes(asset.tag) : false)),
    linkAssets: data.filter((asset) => (asset.tag ? LINK_TYPES.includes(asset.tag) : false)),
  };
};

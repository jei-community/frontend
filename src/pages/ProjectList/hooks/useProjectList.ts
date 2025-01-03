import { getProjectList } from 'everydei-api-dev/lib/apis/functional/projects';
import { useState } from 'react';

import { getNestiaHeader } from '@/utils/api';

import { QUERY_KEYS } from '@/constants/query';

import { useSuspenseQuery } from '@tanstack/react-query';

export const useProjectList = () => {
  const [isMyProject, setIsMyProject] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const query = { isMyProject, page, limit: 6 };
  if (keyword) Object.assign(query, { keyword });
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEYS.PROJECT_LIST, query],
    queryFn: () => getProjectList(getNestiaHeader(), query),
  });

  const toggleIsMyProject = () => {
    setPage(1);
    setIsMyProject(!isMyProject);
  };

  const updateKeyword = (keyword: string) => setKeyword(keyword);

  return { projectList: data.items, pagination: data.pagination, isMyProject, setPage, toggleIsMyProject, updateKeyword };
};

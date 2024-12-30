import { getProjectList } from 'everydei-api-dev/lib/apis/functional/projects';
import { useState } from 'react';

import { BASE_URL } from '@/constants/api';

import { useSuspenseQuery } from '@tanstack/react-query';

export const useProjectList = () => {
  const [isMyProject, setIsMyProject] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const query = { isMyProject, page, limit: 6 };
  if (keyword) Object.assign(query, { keyword });
  const { data } = useSuspenseQuery({
    queryKey: ['projectList', query],
    queryFn: () =>
      getProjectList(
        {
          host: BASE_URL,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
        query,
      ),
  });

  const toggleIsMyProject = () => setIsMyProject(!isMyProject);

  const updateKeyword = (keyword: string) => setKeyword(keyword);

  return { projectList: data.items, pagination: data.pagination, isMyProject, setPage, toggleIsMyProject, updateKeyword };
};

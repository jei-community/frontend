import { getProjectList } from 'everydei-api-dev/lib/apis/functional/projects';
import { useState } from 'react';

import { mockMyProjectList, mockProjectList } from '@/mocks/data/project';

import { ProjectListData } from '@/types/project';

import { URLS } from '@/constants/api';

import { useSuspenseQuery } from '@tanstack/react-query';

export const HEADERS = {
  // Authorization: `Bearer ${TOKEN}`,
};

export const useProjectList = () => {
  const [page, setPage] = useState(1);
  const { data } = useSuspenseQuery({
    queryKey: ['projectList', page],
    queryFn: () =>
      getProjectList(
        {
          host: URLS.GET_PROJECT_LIST,
          headers: HEADERS,
        },
        {
          page,
          limit: 6,
        },
      ),
  });

  const selectProjectAll = () => setProjectList(mockProjectList.data);

  const selectMyProject = () => setProjectList(mockMyProjectList.data);

  const updateProjectList = (newProjectList: ProjectListData) => setProjectList(newProjectList);

  return { projectList: data.items, pagination: data.pagination, updateProjectList, selectProjectAll, selectMyProject, setPage };
};

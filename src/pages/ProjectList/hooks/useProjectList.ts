import { useState } from 'react';

import { mockMyProjectList, mockProjectList } from '@/mocks/data/project';

import { ProjectListData } from '@/types/project';

export const useProjectList = () => {
  const [projectList, setProjectList] = useState(mockProjectList.data);

  const selectProjectAll = () => setProjectList(mockProjectList.data);

  const selectMyProject = () => setProjectList(mockMyProjectList.data);

  const updateProjectList = (newProjectList: ProjectListData) => setProjectList(newProjectList);

  return { projectList, pagination: mockProjectList.pagination, updateProjectList, selectProjectAll, selectMyProject };
};

import { useState } from 'react';

export const useIsMyProjectSelected = (initialSelected: boolean) => {
  const [isMyProjectSelected, setIsMyProjectSelected] = useState(initialSelected);

  const updateIsMyProjectSelected = (newIsMyProjectSelected: boolean) => setIsMyProjectSelected(newIsMyProjectSelected);

  return { isMyProjectSelected, updateIsMyProjectSelected };
};

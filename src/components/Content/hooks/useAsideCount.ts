import { useLayoutEffect, useState } from 'react';

export const useAsideCount = () => {
  const [asideCount, setAsideCount] = useState(2);

  useLayoutEffect(() => {
    const asideCount = document.querySelectorAll('aside').length;
    setAsideCount(asideCount);
  }, []);

  return asideCount;
};

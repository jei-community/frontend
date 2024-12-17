import { useLayoutEffect, useRef, useState } from 'react';

import { AsidePosition } from '@/components/Content/types';

export const useAsideInfo = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [asidePosition, setAsidePosition] = useState<AsidePosition>({ left: true, right: true });

  useLayoutEffect(() => {
    const parent = targetRef.current?.parentElement;
    if (!parent) return;

    const siblings = Array.from(parent.children);
    const articleIndex = siblings.findIndex((sibling) => sibling.tagName === 'ARTICLE');

    if (articleIndex === -1) throw new Error('<article> tag가 없습니다.');

    setAsidePosition({
      left: articleIndex > 0,
      right: articleIndex < siblings.length - 1,
    });
  }, []);

  return { targetRef, asidePosition, asideCount: Number(asidePosition.left) + Number(asidePosition.right) };
};

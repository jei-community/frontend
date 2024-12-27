import { useEffect, useRef, useState } from 'react';

import { S } from './style';
import { ButtonGroupItem } from './types';

interface Props {
  /** 버튼 그룹의 각 버튼 아이템 타입 */
  items: ButtonGroupItem[];
  /** 버튼 선택 시 호출되는 함수 (선택된 아이템 객체 파라미터로 전달됨) */
  onChange?: (item: ButtonGroupItem) => void;
}

/**
 * 버튼 그룹 컴포넌트 (라디오 버튼의 역할을 대신 수행)
 */
export default function ButtonGroup({ items, onChange, ...p }: Props) {
  /** 선택된 아이템 */
  const [checkedItem, setCheckedItem] = useState(() => {
    return items.find((item) => item.checked) ?? items[0];
  });
  /** 최대 버튼 너비 값 */
  const [maxItemWidth, setMaxItemWidth] = useState(0);

  const buttonGroupRef = useRef<HTMLDivElement>(null);

  const handleChange = (item: ButtonGroupItem) => {
    setCheckedItem(item);
    onChange?.(item);
  };

  useEffect(() => {
    if (!buttonGroupRef.current || buttonGroupRef.current.childElementCount === 0) return;

    // 각 버튼 요소의 너비를 측정하여 최대 너비를 구하고, 모든 버튼 요소의 너비를 최대 너비로 설정
    const itemWidthList = Array.from(buttonGroupRef.current.children).map((child) => (child as HTMLLabelElement).offsetWidth);
    const _maxItemWidth = Math.max(...itemWidthList);
    setMaxItemWidth(_maxItemWidth);

    for (const child of buttonGroupRef.current.children) {
      (child as HTMLElement).style.width = `${_maxItemWidth / 10}rem`;
    }
  }, []);

  return (
    <S.ButtonGroupContainer ref={buttonGroupRef}>
      <S.ButtonBackground $color={checkedItem.color} $offsetX={maxItemWidth * items.indexOf(checkedItem)} />
      {items.map((item) => (
        <S.Label key={item.value} $color={item.color} $checked={checkedItem.value === item.value}>
          <S.ActualRadioButton {...p} type='radio' onChange={() => handleChange(item)} name='button-group' />
          {item.label}
        </S.Label>
      ))}
    </S.ButtonGroupContainer>
  );
}

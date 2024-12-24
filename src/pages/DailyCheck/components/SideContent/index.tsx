import { SHEET_CONFIG } from '@/apis/dailyCheck/constant';
import { SheetKey } from '@/apis/dailyCheck/type';

import TextButton from '@/components/TextButton';

import { useCurrSheetStore } from '../../store';
import { S } from './style';

/** 일일점검 페이지 우측 사이드 컨텐츠 */
export default function SideContent() {
  const { currSheet, setCurrSheet } = useCurrSheetStore();

  /** 시트 타이틀 버튼 클릭 시 동작한다. */
  const handleButtonClick = (key: SheetKey) => setCurrSheet(key);

  return (
    <S.Container>
      <S.Title>담당 일일점검 프로젝트</S.Title>
      <S.ButtonWrapper>
        {Object.keys(SHEET_CONFIG).map((key, index) => {
          return (
            <TextButton key={index} color={key === currSheet ? 'primary' : 'neutral'} onClick={() => handleButtonClick(key as SheetKey)}>
              {SHEET_CONFIG[key as SheetKey].title}
            </TextButton>
          );
        })}
      </S.ButtonWrapper>
    </S.Container>
  );
}

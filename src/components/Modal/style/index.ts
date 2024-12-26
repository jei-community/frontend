import { X } from 'lucide-react';

import styled from '@emotion/styled';

export const S = {
  /** 모달 뒷면의 오버레이 스타일 */
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100dvw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(0.4rem);
    transition: all 0.15s;
  `,
  /** 모달 컨테이너 스타일 */
  ModalContainer: styled.section`
    min-width: 32rem;
    min-height: 16rem;
    padding: 3.2rem;
    background-color: white;
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  `,
  /** 모달 헤더 스타일 */
  Header: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  /** 헤더 좌측의 제목 & 부제목 영역 스타일 */
  TitleArea: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  `,
  /** 제목 스타일 */
  Title: styled.div`
    ${({ theme }) => {
      return {
        color: theme.colors.gray[900],
        ...theme.typography.subtitle,
      };
    }}
  `,
  /** 부제목 스타일 */
  Subtitle: styled.div`
    ${({ theme }) => {
      return {
        color: theme.colors.gray[500],
        ...theme.typography.body1,
      };
    }}
  `,
  CloseButtonWrapper: styled.button`
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
  `,
  /** 닫기 아이콘 버튼 스타일 */
  CloseButton: styled(X)`
    width: 3.2rem;
    height: 3.2rem;
    stroke-width: 1.5;
  `,
  /** 모달 내용 스타일 */
  Content: styled.div`
    ${({ theme }) => {
      return {
        color: theme.colors.gray[900],
        ...theme.typography.body1,
      };
    }}
  `,
  /** 모달 푸터 스타일 */
  Footer: styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1.6rem;
  `,
};

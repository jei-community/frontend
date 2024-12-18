import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const S = {
  /** 아티클 포스트 */
  Article: {
    /** 아티클 포스트 컨테이너 */
    Container: styled.div<{ $isOpen: boolean }>(({ $isOpen }) => ({
      width: '72rem',
      maxHeight: $isOpen ? '100%' : '28.8rem',
      height: 'fit-content',
      backgroundColor: theme.colors.gray[100],
      borderRadius: '1.6rem',
      padding: '1.6rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
    })),
    /** 포스트 정보 */
    Info: {
      /**포스트 정보 컨테이너 */
      Container: styled.div({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '3.2rem',
      }),
      /** 유저 프로필 컨테이너 */
      profileContainer: styled.div({
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
      }),
      /** 유저 프로필 이미지 */
      Avatar: styled.img({
        width: '3.2rem',
        height: '3.2rem',
        borderRadius: '100%',
        objectFit: 'cover',
        backgroundColor: theme.colors.gray[300],
      }),
      /** 유저 이름 */
      Name: styled.span({
        ...theme.typography.body2,
        color: theme.colors.gray[900],
      }),
      /** 작성일 */
      date: styled.span({
        ...theme.typography.body3,
        color: theme.colors.gray[500],
      }),
    },
    /** 포스트 제목 */
    Title: styled.h1({
      ...theme.typography.subtitle,
      color: theme.colors.gray[900],
      height: '3.2rem',
    }),
    /** 포스트 내용 */
    Description: styled.div<{ $isOpen: boolean }>(({ $isOpen }) => ({
      ...theme.typography.body1,
      color: theme.colors.gray[800],
      margin: '0.8rem 0',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      lineClamp: $isOpen ? 'none' : 5,
      WebkitLineClamp: $isOpen ? 'none' : 5,
      WebkitBoxOrient: 'vertical',
    })),
    /** 하단 텍스트 버튼 */
    Buttons: {
      /** 버튼 컨테이너 */
      Container: styled.div({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '2.4rem',
      }),
      /** 텍스트 버튼 */
      textButton: styled.p({
        ...theme.typography.body2,
        color: theme.colors.primary[500],
        cursor: 'pointer',
      }),
    },
  },
};

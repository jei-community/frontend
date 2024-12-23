import styled from '@emotion/styled';

export const S = {
  /** 메모 툴팁 */
  Memo: {
    Container: styled.div(({ theme }) => ({
      width: '29.3rem',
      height: '16.8rem',
      padding: '0.8rem',
      position: 'absolute',
      left: '50%',
      bottom: '-17.2rem',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
      backgroundColor: theme.colors.gray[300],
      borderRadius: '0.8rem',
      zIndex: 1,
    })),

    ButtonWrapper: styled.div(() => ({
      display: 'flex',
      justifyContent: 'space-between',
    })),
  },
  /** 체크박스 툴팁 */
  CheckBox: {
    Wrapper: styled.div(({ theme }) => ({
      width: '12.8rem',
      height: '4.8rem',
      backgroundColor: theme.colors.gray[300],
      borderRadius: '0.8rem',
      display: 'flex',
      gap: '0.8rem',
      padding: '0.8rem',
      position: 'absolute',
      left: '50%',
      bottom: '-5.2rem',
      transform: 'translateX(-50%)',
      zIndex: 1,
    })),
    Button: styled.div<{ $isSelected: boolean }>(({ theme, $isSelected }) => ({
      width: '3.2rem',
      height: '3.2rem',
      cursor: 'pointer',
      borderRadius: '0.4rem',
      backgroundColor: $isSelected ? theme.colors.success[500] : theme.colors.gray[500],
      color: theme.colors.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    })),
  },
};

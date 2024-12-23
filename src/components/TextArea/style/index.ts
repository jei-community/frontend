import styled from '@emotion/styled';

interface TextAreaStyleProps {
  $isError: boolean;
}

export const S = {
  /** 공통 텍스트 에리어 컴포넌트 스타일 */
  TextArea: styled.textarea<TextAreaStyleProps>`
    width: 100%;
    padding: 0.6rem 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    outline: none;
    resize: none;
    overflow: hidden;
    transition: all 0.15s;

    // 폰트 스타일
    ${({ theme }) => theme.typography.body1}
    color: ${({ theme }) => theme.colors.gray[900]};

    // 배경 및 테두리 스타일
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme, $isError }) => ($isError ? theme.colors.error[500] : theme.colors.gray[300])};

    // 텍스트 에리어 상태에 따른 스타일
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[400]};
    }
    &:hover {
      border: 2px solid ${({ theme, $isError }) => ($isError ? theme.colors.error[500] : theme.colors.gray[500])};
    }
    &:active,
    &:focus {
      border: 2px solid ${({ theme, $isError }) => ($isError ? theme.colors.error[500] : theme.colors.primary[500])};
    }
    &:focus:hover {
      border: 2px solid ${({ theme, $isError }) => ($isError ? theme.colors.error[500] : theme.colors.primary[500])};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.gray[100]};
      border: 2px solid ${({ theme }) => theme.colors.gray[200]};
      color: ${({ theme }) => theme.colors.gray[400]};
      cursor: not-allowed;
    }
    &:disabled:hover {
      border: 2px solid ${({ theme }) => theme.colors.gray[200]};
    }
    &:disabled::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  `,
};

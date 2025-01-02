import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import Button from '@/components/Button';

import styled from '@emotion/styled';

interface Props {
  totalCount: number;
  page: number;
  limit: number;
  hasNext: boolean;
  onPageChange: (newPage: number) => void;
}

export default function Pagination({ totalCount, page, limit, hasNext, onPageChange }: Props) {
  const totalPages = Math.ceil(totalCount / limit);
  // 현재 페이지가 가운데로 고정되게
  const start = Math.max(page - 4, 1);
  const end = Math.min(start + 8, totalPages);

  const handlePageChange = (newPage: number) => onPageChange(newPage);

  return (
    <S.Container>
      <S.PaginationButton onClick={() => handlePageChange(1)} disabled={page === 1}>
        <ChevronFirstIcon />
      </S.PaginationButton>
      <S.PaginationButton onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        <ChevronLeftIcon />
      </S.PaginationButton>
      <S.PaginationNumberList>
        {Array.from({ length: end - start + 1 }, (_, index) => {
          const pageNumber = start + index;

          return (
            <li key={pageNumber}>
              {page === pageNumber ? (
                <Button size='icon'>
                  <S.PaginationNumber $isClicked={pageNumber === page}>{pageNumber}</S.PaginationNumber>
                </Button>
              ) : (
                <S.PaginationButton onClick={() => handlePageChange(pageNumber)}>
                  <S.PaginationNumber $isClicked={pageNumber === page}>{pageNumber}</S.PaginationNumber>
                </S.PaginationButton>
              )}
            </li>
          );
        })}
      </S.PaginationNumberList>
      <S.PaginationButton onClick={() => handlePageChange(page + 1)} disabled={!hasNext || page === totalPages}>
        <ChevronRightIcon />
      </S.PaginationButton>
      <S.PaginationButton onClick={() => handlePageChange(totalPages)} disabled={page === totalPages}>
        <ChevronLastIcon />
      </S.PaginationButton>
    </S.Container>
  );
}

const S = {
  Container: styled.div({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    gap: '0.8rem',
  }),

  PaginationNumberList: styled.ul({
    display: 'flex',
    gap: '0.8rem',
  }),

  PaginationButton: styled.button(({ disabled }: { disabled?: boolean }) => ({
    width: '3.2rem',
    height: '3.2rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
  })),

  PaginationNumber: styled.p<{ $isClicked: boolean }>(({ theme, $isClicked }) => ({
    color: $isClicked ? theme.colors.white : theme.colors.gray[800],
    ...theme.typography.body2,
    fontWeight: $isClicked ? 'bold' : 'normal',
  })),
};

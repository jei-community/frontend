import { ImagePlusIcon } from 'lucide-react';

import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const S = {
  Container: styled.div<{ $isActive: boolean }>(({ $isActive }) => ({
    position: 'relative',
    border: '1px',
    borderStyle: $isActive ? 'dashed' : 'solid',
    borderColor: $isActive ? '' : 'rgba(0, 0, 0, 0)',
    borderRadius: '0.8rem',
    transition: 'all 0.1s ease',
    backgroundColor: theme.colors.gray[100],
    width: '100%',
    minHeight: '16rem',
    height: '100%',
    padding: '1.6rem',
    margin: '1.6rem 0',
  })),

  ActiveDim: styled.div({
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    zIndex: '10',
    backgroundColor: theme.colors.primary[500],
    opacity: '0.1',
    borderRadius: '0.8rem',
  }),

  EmptyFiles: styled.div({
    display: 'flex',
    position: 'relative',
    width: '100%',
    minHeight: '16rem',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: theme.colors.gray[100],
    borderRadius: '0.4rem',
    ...theme.typography.body3,
    '&:hover': {
      backgroundColor: theme.colors.gray[300],
    },
  }),

  HiddenInput: styled.input({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    cursor: 'pointer',
  }),

  EmptyContent: styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }),

  FileWrapper: styled.div({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '0.8rem',
    alignItems: 'center',
  }),

  FileItem: styled.div({
    position: 'relative',
    width: '16rem',
    height: '16rem',
    borderRadius: '0.4rem',
    flexShrink: 0,
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '0.8rem',
    },
  }),

  DeleteButton: styled.div({
    position: 'absolute',
    top: '0.8rem',
    right: '0.8rem',
    width: '3.2rem',
    height: '3.2rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.error[500],
    borderRadius: '0.4rem',
    color: '#fff',
    zIndex: 2,
  }),

  AddFileWrapper: styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '16rem',
    height: '16rem',
    backgroundColor: theme.colors.gray[200],
    borderRadius: '0.8rem',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
      backgroundColor: theme.colors.gray[300],
    },
  }),

  ImagePlusIcon: styled(ImagePlusIcon)({
    width: '3.2rem',
    height: '3.2rem',
    marginBottom: '0.8rem',
  }),
};

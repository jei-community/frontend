import styled from '@emotion/styled';
import MDEditor from '@uiw/react-md-editor';

export const S = {
  MDEditor: styled(MDEditor)(({ theme }) => ({
    ...theme.typography.body1,
  })),
  Markdown: styled(MDEditor.Markdown)({
    padding: '1.6rem',
  }),
};

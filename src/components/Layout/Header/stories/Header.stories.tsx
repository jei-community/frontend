import { MemoryRouter, Navigate, Route, Routes } from 'react-router';

import { PATH } from '@/constants/path';

import type { Meta, StoryObj } from '@storybook/react';

import Header from '..';

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HomeHeader: Story = {
  render: () => {
    return (
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route element={<Header />} path={PATH.MAIN} />
          <Route element={<Header />} path={PATH.PROJECT.ABSOLUTE.LIST.INDEX} />
          <Route element={<Header />} path={PATH.DAILY_CHECK} />
          <Route element={<Header />} path={PATH.ARTICLES} />
          <Route element={<Header />} path={`${PATH.POSTS.INDEX}/${PATH.POSTS.LIST}`} />
          <Route element={<Header />} path={`${PATH.ALBUMS.INDEX}/${PATH.ALBUMS.LIST}`} />
          <Route element={<Navigate to={PATH.MAIN} replace />} path={PATH.SIGN_IN} />
        </Routes>
      </MemoryRouter>
    );
  },
};

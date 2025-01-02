import { ComponentProps, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Pagination from '..';

const meta = {
  title: 'Pagination',
  component: Pagination,
  tags: ['autodocs', '!dev'],
  args: { totalCount: 100, page: 1, limit: 10, hasNext: true, onPageChange: fn() },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

const PagenationTemplate = (args: ComponentProps<typeof Pagination>) => {
  const [paginationState, setPaginationState] = useState<Omit<ComponentProps<typeof Pagination>, 'onPageChange'>>({
    totalCount: args.totalCount,
    page: args.page,
    limit: args.limit,
    hasNext: args.hasNext,
  });

  const handlePageChange = (newPage: number) => {
    setPaginationState((prevState) => ({ ...prevState, page: newPage }));
  };

  return <Pagination {...paginationState} onPageChange={handlePageChange} />;
};

export const DefaultPagination: Story = {
  args: { totalCount: 100, page: 1, limit: 10, hasNext: true },
  render: (args) => <PagenationTemplate {...args} />,
};

export const OnePagePagination: Story = {
  args: { totalCount: 1, page: 1, limit: 10, hasNext: false },
  render: (args) => <PagenationTemplate {...args} />,
};

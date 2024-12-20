import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Checkbox from '..';

const meta = {
  component: Checkbox,
  tags: ['autodocs', '!dev'],
  args: { checked: false, disabled: false, onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 스토리를 위한 체크박스 컴포넌트
 *
 * (체크박스 자체는 상태를 가지고 있지 않으므로, 상태를 가지는 컴포넌트를 만들어서 테스트)
 */
function CheckboxWithHooks(args: Story['args']) {
  const [checked, setChecked] = useState(args?.checked ?? false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
}

export const UncheckedCheckbox: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: CheckboxWithHooks,
};

export const CheckedCheckbox: Story = {
  args: {
    checked: true,
    disabled: false,
  },
  render: CheckboxWithHooks,
};

export const UncheckedDisabledCheckbox: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  render: CheckboxWithHooks,
};

export const CheckedDisabledCheckbox: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: CheckboxWithHooks,
};

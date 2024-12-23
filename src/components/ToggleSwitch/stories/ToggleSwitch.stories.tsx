import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import ToggleSwitch from '..';

const meta = {
  component: ToggleSwitch,
  tags: ['autodocs', '!dev'],
  args: { checked: false, disabled: false, onChange: fn() },
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 스토리를 위한 토글 스위치 컴포넌트
 *
 * (토글 스위치 자체는 상태를 가지고 있지 않으므로, 상태를 가지는 컴포넌트를 만들어서 테스트)
 */
function ToggleSwitchWithHooks(args: Story['args']) {
  const [checked, setChecked] = useState(args?.checked ?? false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return <ToggleSwitch {...args} checked={checked} onChange={handleChange} />;
}

export const UncheckedToggleSwitch: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: ToggleSwitchWithHooks,
};

export const CheckedToggleSwitch: Story = {
  args: {
    checked: true,
    disabled: false,
  },
  render: ToggleSwitchWithHooks,
};

export const UncheckedDisabledToggleSwitch: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  render: ToggleSwitchWithHooks,
};

export const CheckedDisabledToggleSwitch: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: ToggleSwitchWithHooks,
};

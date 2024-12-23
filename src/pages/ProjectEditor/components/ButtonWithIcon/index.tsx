import { CopyPlusIcon, ImageIcon } from 'lucide-react';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { S } from '@/pages/ProjectEditor/components/ButtonWithIcon/style';

type IconVariant = 'copyPlus' | 'image';

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  size?: '100%' | 'fit-content';
  align?: 'start' | 'center';
  iconVariant?: IconVariant;
}

export default function ButtonWithIcon({ size = 'fit-content', align = 'start', iconVariant = 'copyPlus', children, ...props }: Props) {
  const ICONS = {
    copyPlus: <CopyPlusIcon color='white' />,
    image: <ImageIcon color='white' />,
  };

  return (
    <S.ButtonWithIcon type='button' $size={size} $align={align} {...props}>
      <S.IconWrapper>{ICONS[iconVariant]}</S.IconWrapper>
      <S.Background />
      {children}
    </S.ButtonWithIcon>
  );
}

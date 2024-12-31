import { CopyPlusIcon, ImageIcon } from 'lucide-react';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { S } from '@/pages/ProjectEditor/components/ButtonWithIcon/style';

type IconVariant = 'copyPlus' | 'image';

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  widthSize?: '100%' | 'fit-content';
  heightSize?: '100%' | 'fit-content';
  align?: 'start' | 'center';
  iconVariant?: IconVariant;
}

export default function ButtonWithIcon({
  widthSize = 'fit-content',
  heightSize = 'fit-content',
  align = 'start',
  iconVariant = 'copyPlus',
  children,
  ...props
}: Props) {
  const ICONS = {
    copyPlus: <CopyPlusIcon color='white' />,
    image: <ImageIcon color='white' />,
  };

  return (
    <S.ButtonWithIcon type='button' $widthSize={widthSize} $heightSize={heightSize} $align={align} {...props}>
      <S.IconWrapper>{ICONS[iconVariant]}</S.IconWrapper>
      <S.Background />
      {children}
    </S.ButtonWithIcon>
  );
}

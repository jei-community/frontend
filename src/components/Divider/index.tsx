import { S } from '@/components/Divider/style';

export type DividerDirection = 'vertical' | 'horizontal';

interface Props {
  direction?: DividerDirection;
}

export default function Divider({ direction = 'horizontal' }: Props) {
  return <S.Divider $direction={direction} />;
}

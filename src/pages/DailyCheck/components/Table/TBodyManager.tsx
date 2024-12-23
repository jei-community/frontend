import { S } from './style';

interface Props {
  /** 담당자 이름 */
  name: string;
}

/**
 * 담당자 셀 컴포넌트
 */
export default function TBodyManager({ name }: Props) {
  return <S.TBody.Td>{name}</S.TBody.Td>;
}

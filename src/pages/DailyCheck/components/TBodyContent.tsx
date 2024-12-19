import { STATUS } from '../constant';
import CheckBox from './CheckBox';
import { S } from './style';

interface Props {
  col: string;
  row: Record<string, string>;
}

/**
 * 테이블 바디 컨텐츠
 */
export default function TBodyContent({ col, row }: Props) {
  switch (col) {
    case '구분':
      return <S.TBody.TdTodo>{row[col]}</S.TBody.TdTodo>;

    case '메모':
      return <S.TBody.Td>{row[col]?.length > 0 ? <S.Icon.Memo /> : <S.Icon.Plus />}</S.TBody.Td>;

    case '담당자':
      return <S.TBody.Td>{row[col]}</S.TBody.Td>;

    default:
      return (
        <S.TBody.Td>
          <CheckBox status={STATUS[row[col]] ?? 'INCOMPLETE'} isToday={true} />
        </S.TBody.Td>
      );
  }
}

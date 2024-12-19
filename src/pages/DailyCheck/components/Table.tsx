import CheckBox from './CheckBox';
import { S } from './style';

interface TProps {
  data: { title: string; columns: Array<string>; data: Array<Record<string, string>> };
  userName: string;
}

/**
 * 테이블 컴포넌트
 */
export default function Table({ data, userName }: TProps) {
  /** column에 따라 width를 정해준다.  */
  const getColumnWidth = (col: string) => {
    switch (col) {
      case '구분':
        return 552;
      case '메모':
        return 60;
      case '담당자':
        return 100;
      default:
        return 80;
    }
  };

  /** 일일점검 상태를 반환한다. */
  const getStatus = (status: string) => {
    switch (status) {
      case 'O':
        return 'COMPLETE';
      case '-':
        return 'VACATION';
      default:
        return 'INCOMPLETE';
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {data.columns.map((column, index) => (
            <S.Thead.Th $width={getColumnWidth(column)} key={index}>
              {column}
            </S.Thead.Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.data.map((row, rowIndex) => (
          <S.TBody.Tr $isMyInfo={row['담당자'] === userName} key={`tb-${rowIndex}`}>
            {data.columns.map((col, colIndex) =>
              col === '구분' ? (
                <S.TBody.TdTodo key={`tb-${colIndex}`}>{row[col]}</S.TBody.TdTodo>
              ) : col === '메모' ? (
                <S.TBody.Td key={`tb-${colIndex}`}>{row[col].length !== 0 || !!row[col] ? <S.Icon.Memo /> : <S.Icon.Plus />}</S.TBody.Td>
              ) : col === '담당자' ? (
                <S.TBody.Td key={`tb-${colIndex}`}>{row[col]}</S.TBody.Td>
              ) : (
                <S.TBody.Td key={`tb-${colIndex}`}>
                  <CheckBox status={getStatus(row[col])} isToday={true} />
                </S.TBody.Td>
              ),
            )}
          </S.TBody.Tr>
        ))}
      </tbody>
    </table>
  );
}

import { DailyCheckResponse } from '@/apis/dailyCheck';

import { COLUMN_WIDTHS } from '../constant';
import TBodyContent from './TBodyContent';
import { S } from './style';

interface Props {
  data: DailyCheckResponse;
  userName: string;
}

/**
 * 테이블 컴포넌트
 */
export default function Table({ data, userName }: Props) {
  return (
    <table>
      <thead>
        <tr>
          {data.columns.map((column, index) => (
            <S.Thead.Th $width={COLUMN_WIDTHS[column] ?? 80} key={index}>
              {column}
            </S.Thead.Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.data.map((row, rowIndex) => (
          <S.TBody.Tr $isMyInfo={row['담당자'] === userName} key={`tb-${rowIndex}`}>
            {data.columns.map((col, colIndex) => (
              <TBodyContent col={col} row={row} key={colIndex} />
            ))}
          </S.TBody.Tr>
        ))}
      </tbody>
    </table>
  );
}

import { DailyCheckResponse } from '@/apis/dailyCheck/type';

import { COLUMN_WIDTHS } from '../../constant';
import TBodyContent from './TBodyContent';
import { S } from './style';

interface Props {
  /**테이블 데이터 */ data: DailyCheckResponse;
  /** 유저 이름 */ userName: string;
}

/**
 * 테이블 컴포넌트
 */
export default function Table({ data, userName }: Props) {
  /** 데이터를 업데이트 한다.
   * @param data 업데이트할 데이터
   * @param targetName 업데이트할 유저의 이름
   * @param targetCol 업데이트할 컬럼
   * @param value 수정하고자하는 값
   */
  const handleUpdateData = (targetName: string, targetCol: string | number, value: string) => {
    data.data.forEach((row) => {
      if (row['담당자'] === targetName) row[targetCol] = value;
    });
  };

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
              <TBodyContent key={colIndex} col={col} row={row} handleUpdateData={handleUpdateData} />
            ))}
          </S.TBody.Tr>
        ))}
      </tbody>
    </table>
  );
}

import { COLUMN_WIDTHS } from '../../constant';
import { useDailyCheckListStore } from '../../store';
import TBodyContent from './TBodyContent';
import { S } from './style';

interface Props {
  /** 유저 이름 */ userName: string;
}

/**
 * 테이블 컴포넌트
 */
export default function Table({ userName }: Props) {
  const dailyCheckData = useDailyCheckListStore((state) => state.dailyCheckData);
  const setDailyCheckData = useDailyCheckListStore((state) => state.setDailyCheckData);

  /** 데이터를 업데이트 한다.
   * @param data 업데이트할 데이터
   * @param targetName 업데이트할 유저의 이름
   * @param targetCol 업데이트할 컬럼
   * @param value 수정하고자하는 값
   */
  const handleUpdateData = (targetName: string, targetCol: string | number, value: string) => {
    if (!dailyCheckData) return;
    const updatedDailyCheckData = {
      ...dailyCheckData,
      data: dailyCheckData.data.map((row) => (row['담당자'] === targetName ? { ...row, [targetCol]: value } : row)),
    };

    setDailyCheckData(updatedDailyCheckData);
  };

  return (
    <table>
      <thead>
        <tr>
          {dailyCheckData &&
            dailyCheckData.columns.map((column, index) => (
              <S.Thead.Th $width={COLUMN_WIDTHS[column] ?? 80} key={index}>
                {column}
              </S.Thead.Th>
            ))}
        </tr>
      </thead>
      <tbody>
        {dailyCheckData &&
          dailyCheckData.data.map((row, rowIndex) => (
            <S.TBody.Tr $isMyInfo={row['담당자'] === userName} key={`tb-${rowIndex}`}>
              {dailyCheckData &&
                dailyCheckData.columns.map((col, colIndex) => (
                  <TBodyContent key={`${colIndex}-${row[col]}`} col={col} row={row} handleUpdateData={handleUpdateData} />
                ))}
            </S.TBody.Tr>
          ))}
      </tbody>
    </table>
  );
}

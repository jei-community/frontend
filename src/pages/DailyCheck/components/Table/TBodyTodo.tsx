import HtmlParser from '@/components/HtmlParser';

import { S } from './style';

interface Props {
  /** '구분'열의 HTML 문자열 */
  htmlString: string;
}

/**
 * 구분 셀 컴포넌트
 */
export default function TBodyTodo({ htmlString }: Props) {
  return (
    <S.TBody.TdTodo>
      <HtmlParser htmlString={htmlString} />
    </S.TBody.TdTodo>
  );
}

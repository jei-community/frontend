import Content from '@/components/Content';

import Post from './components/Post';
import { S } from './style';

/**
 * 아티클 포스트 페이지
 */
export default function Articles() {
  return (
    <Content>
      <S.Container>
        {/* TODO(지애): 포스트 데이터 받아와서 렌더링 */}
        <Post />
      </S.Container>
    </Content>
  );
}

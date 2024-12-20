import Aside from '@/components/Aside';
import Content from '@/components/Content';

import PostingLink from './components/PostingLink';

/** 포스트 목록을 보여주는 페이지 */
export default function PostList() {
  return (
    <>
      <Aside>1234</Aside>
      <Content>{/* TODO(범규): 포스트 리스트 UI 구현 필요 */}</Content>
      <Aside>
        <PostingLink />
      </Aside>
    </>
  );
}

import Aside from '@/components/Aside';
import Content from '@/components/Content';

import PostingLink from '../PostingLink';

/** 포스트 목록을 보여주는 페이지 */
export default function PostList() {
  return (
    <>
      <Aside>1234</Aside>
      <Content>1234</Content>
      <Aside>
        <PostingLink />
      </Aside>
    </>
  );
}

import Aside from '@/components/Aside';
import Content from '@/components/Content';
import EmptyContent from '@/components/EmptyContent';

import EditorLink from './components/EditorLink';
import { S } from './style';

/** 포스트 목록을 보여주는 페이지 */
export default function PostList() {
  return (
    <>
      <Aside>1234</Aside>
      <Content>
        <S.ContentContainer>
          {/* TODO(범규): 포스트 리스트 UI 구현 필요 */}
          <EmptyContent size='large'>볼 수 있는 포스트가 없어요.</EmptyContent>
        </S.ContentContainer>
      </Content>
      <Aside>
        <S.AsideContainer>
          <EditorLink />
        </S.AsideContainer>
      </Aside>
    </>
  );
}

import Aside from '@/components/Aside';
import Content from '@/components/Content';
import Profile from '@/components/Profile';

import { S } from './style';

export default function AlbumList() {
  return (
    <>
      <Aside>
        <Profile />
      </Aside>
      <Content>
        <S.ContentContainer>1234</S.ContentContainer>
      </Content>
      <Aside />
    </>
  );
}

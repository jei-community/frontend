import { RefObject, useState } from 'react';

import EnvContainer from '@/components/EnvContainer';

import { S } from '@/pages/Project/components/Env/style';

interface Props {
  ref: RefObject<HTMLHeadingElement | null>;
}

// TODO(증훈): 서버 데이터로 교체
export default function Env({ ref }: Props) {
  const [isEnvOpen, setIsEnvOpen] = useState(false);

  const handleOpenEnv = () => setIsEnvOpen(!isEnvOpen);

  return (
    <EnvContainer ref={ref}>
      <S.EnvBoard>
        {isEnvOpen ? (
          <ul>
            {Array.from({ length: 4 }, (_, index) => {
              return (
                <li key={index}>
                  <S.EnvText>VITE_APP_COCOA=https://example.com</S.EnvText>
                </li>
              );
            })}{' '}
          </ul>
        ) : (
          <S.EnvButton onClick={handleOpenEnv}>내용 표시</S.EnvButton>
        )}
      </S.EnvBoard>
    </EnvContainer>
  );
}

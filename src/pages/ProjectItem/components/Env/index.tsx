import { RefObject, useState } from 'react';

import EnvContainer from '@/components/EnvContainer';

import { S } from '@/pages/ProjectItem/components/Env/style';

interface Props {
  ref: RefObject<HTMLHeadingElement | null>;
  configuration: string;
}

export default function Env({ ref, configuration }: Props) {
  const [isEnvOpen, setIsEnvOpen] = useState(false);

  const handleOpenEnv = () => setIsEnvOpen(!isEnvOpen);

  return (
    <EnvContainer ref={ref}>
      <S.EnvBoard>{isEnvOpen ? <S.EnvText>{configuration}</S.EnvText> : <S.EnvButton onClick={handleOpenEnv}>내용 표시</S.EnvButton>}</S.EnvBoard>
    </EnvContainer>
  );
}

import { Dispatch, SetStateAction, useState } from 'react';

import { ProjectAsset } from '@/types/project';

import TechStack from '@/components/TechStack';
// import Button from '@/components/Button';
import TechStackContainer from '@/components/TechStackContainer';

import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import Modal from '@/pages/ProjectEditor/components/Modal';
import { S } from '@/pages/ProjectEditor/components/TechStackEditor/style';
import { TechStacksToRender } from '@/pages/ProjectEditor/type';

interface Props {
  techStackAssets: ProjectAsset[];
  techStacksToRender: TechStacksToRender;
  setTechStacksToRender: Dispatch<SetStateAction<TechStacksToRender>>;
}

export default function TechStackEditor({ techStackAssets, techStacksToRender, setTechStacksToRender }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'frontend' | 'backend' | ''>('');

  const toggleTechStackSelection = (url: string) => {
    if (!position) return;

    const selectedTechStacks = techStacksToRender[position] || [];
    const isSelected = selectedTechStacks.some((stack) => stack.url === url);

    const updatedTechStacks = isSelected
      ? selectedTechStacks.filter((stack) => stack.url !== url) // 선택 해제
      : [...selectedTechStacks, techStackAssets.find((asset) => asset.url === url)!]; // 선택 추가

    setTechStacksToRender({
      ...techStacksToRender,
      [position]: updatedTechStacks,
    });
  };

  const openTechStackModal = (newPosition: 'frontend' | 'backend') => {
    setPosition(newPosition);
    setIsOpen(true);
  };

  return (
    <>
      <TechStackContainer>
        <TechStack>
          {techStacksToRender.frontend ? (
            <>
              <TechStack.Title>FRONTEND</TechStack.Title>
              <ButtonWithIcon size='100%' onClick={() => openTechStackModal('frontend')}>
                <TechStack.List techStacks={techStacksToRender.frontend} display={'grid'} />
              </ButtonWithIcon>
            </>
          ) : (
            <>
              <TechStack.Title>FRONTEND</TechStack.Title>
              <ButtonWithIcon size='100%' onClick={() => openTechStackModal('frontend')}>
                <S.TechListWrapper>
                  <div style={{ height: '100px' }} />
                </S.TechListWrapper>
              </ButtonWithIcon>
            </>
          )}
          {techStacksToRender.backend ? (
            <>
              <TechStack.Title>BACKEND</TechStack.Title>
              <ButtonWithIcon size='100%' onClick={() => openTechStackModal('backend')}>
                <TechStack.List techStacks={techStacksToRender.backend} display={'grid'} />
              </ButtonWithIcon>
            </>
          ) : (
            <>
              <TechStack.Title>BACKEND</TechStack.Title>
              <ButtonWithIcon size='100%' onClick={() => openTechStackModal('backend')}>
                <S.TechListWrapper>
                  <div style={{ height: '100px' }} />
                </S.TechListWrapper>
              </ButtonWithIcon>
            </>
          )}
        </TechStack>
      </TechStackContainer>

      {isOpen && position && (
        <Modal title={`기술 스택 (${position.toUpperCase()})`} close={() => setIsOpen(false)}>
          <S.ModalTechStackListContainer>
            <S.AllTechStackList>
              {techStackAssets.map(({ url, tag }) => (
                <li key={url}>
                  <button onClick={() => toggleTechStackSelection(url)}>
                    <S.TechStackImage
                      $isSelected={Boolean(techStacksToRender[position]?.some((stack) => stack.url === url))}
                      src={url}
                      alt={tag ?? ''}
                    />
                  </button>
                </li>
              ))}
            </S.AllTechStackList>
            {/* <S.ConfirmButtonWrapper>
              <Button size='medium' color='success' onClick={saveChanges}>
                저장
              </Button>
            </S.ConfirmButtonWrapper> */}
          </S.ModalTechStackListContainer>
        </Modal>
      )}
    </>
  );
}

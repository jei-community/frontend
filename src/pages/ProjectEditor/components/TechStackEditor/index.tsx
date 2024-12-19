import { useState } from 'react';

import { techStacks } from '@/mocks/data';

import TechStackContainer from '@/components/TechStackContainer';
import TechStackList from '@/components/TechStackList';

import ButtonWithIcon from '@/pages/ProjectEditor/components/ButtonWithIcon';
import Modal from '@/pages/ProjectEditor/components/Modal';
import { S } from '@/pages/ProjectEditor/components/TechStackEditor/style';

export default function TechStackEditor() {
  // Modal 공통 컴포넌트, hook으로 교체할 예정
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);

  const openTechStackEditorModal = () => setIsOpen(true);

  const toggleTechStackSelection = (id: string | number) => {
    if (selectedTechStacks.includes(String(id))) setSelectedTechStacks(selectedTechStacks.filter((techStackId) => techStackId !== String(id)));
    else setSelectedTechStacks([...selectedTechStacks, String(id)]);
  };

  const resetTechStackSelections = () => setSelectedTechStacks([]);

  // const saveTechStack = () => {
  //   // API 요청

  //   resetTechStackSelections();
  // };

  return (
    <TechStackContainer>
      <TechStackList.Title>Frontend</TechStackList.Title>
      <ButtonWithIcon onClick={openTechStackEditorModal}>
        <S.TechListWrapper>
          <TechStackList techStacks={techStacks} display='flex' />
        </S.TechListWrapper>
      </ButtonWithIcon>
      <TechStackList.Title>Backend</TechStackList.Title>
      <ButtonWithIcon onClick={openTechStackEditorModal}>
        <S.TechListWrapper>
          <TechStackList techStacks={techStacks} display='flex' />
        </S.TechListWrapper>
      </ButtonWithIcon>

      {isOpen && (
        <Modal title={`기술 스택 (${'position'})`} close={() => setIsOpen(false)} onClose={resetTechStackSelections}>
          <S.AllTechStackList>
            {techStacks.map(({ src, alt }, index) => {
              const id = String(index); // 실제 데이터 사용하기 전 임시 id

              return (
                <li key={id}>
                  <button onClick={() => toggleTechStackSelection(id)}>
                    <S.TechStackImage $isSelected={selectedTechStacks.includes(id)} src={src} alt={alt} />
                  </button>
                </li>
              );
            })}
          </S.AllTechStackList>
        </Modal>
      )}
    </TechStackContainer>
  );
}

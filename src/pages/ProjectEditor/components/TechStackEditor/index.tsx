import { useState } from 'react';

import { TechStackItem } from '@/types/project';

import TechStackContainer from '@/components/TechStackContainer';

import Modal from '@/pages/ProjectEditor/components/Modal';
import DefaultTechStacks from '@/pages/ProjectEditor/components/TechStackEditor/components/DefaultTechStacks';
import EditableTechStacks from '@/pages/ProjectEditor/components/TechStackEditor/components/EditableTechStacks';
import { S } from '@/pages/ProjectEditor/components/TechStackEditor/style';

interface Props {
  techStacks: TechStackItem[] | null;
}

export default function TechStackEditor({ techStacks }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
  const [position, setPosition] = useState<string>('');

  const toggleTechStackSelection = (id: string | number) => {
    if (selectedTechStacks.includes(String(id))) setSelectedTechStacks(selectedTechStacks.filter((techStackId) => techStackId !== String(id)));
    else setSelectedTechStacks([...selectedTechStacks, String(id)]);
  };

  const openTechStackModal = (position: string) => {
    setPosition(position);
    setIsOpen(true);
  };

  return (
    <>
      <TechStackContainer>
        {techStacks ? (
          <EditableTechStacks techStacks={techStacks} openTechStackModal={openTechStackModal} />
        ) : (
          <DefaultTechStacks openTechStackModal={openTechStackModal} />
        )}
      </TechStackContainer>

      {isOpen && (
        <Modal title={`기술 스택 (${position})`} close={() => setIsOpen(false)} onClose={() => setSelectedTechStacks([])}>
          {/* TODO(증훈): 아래 로직 techStack 이미지 불러오는 API로 교쳬 예정 */}
          <S.AllTechStackList>
            {techStacks
              ?.find((techStack) => techStack.position === position)
              ?.data.map(({ url, tag }, index) => {
                const id = String(index); // 실제 데이터 사용하기 전 임시 id

                return (
                  <li key={id}>
                    <button onClick={() => toggleTechStackSelection(id)}>
                      <S.TechStackImage $isSelected={selectedTechStacks.includes(id)} src={url} alt={tag} />
                    </button>
                  </li>
                );
              })}
          </S.AllTechStackList>
        </Modal>
      )}
    </>
  );
}

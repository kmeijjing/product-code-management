import { useEffect } from 'react';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { animations } from '@formkit/drag-and-drop';
import { useOptionCodeStore } from '@/stores/useOptionCodeStore';
import { CodePattern } from '@/types/codePattern';
import SectionHeaderCard from '@/components/SectionHeaderCard';
import DraggableCodeItemList from '@/components/DraggableCodeItemList';
import DraggableCodeItem from '@/components/DraggableCodeItem';

const OptionsCodeCard = () => {
	const { activeOptionCode, inactiveOptionCode, update } = useOptionCodeStore();

	const [activeList, activeItems, setActive] = useDragAndDrop<
		HTMLUListElement,
		CodePattern
	>([], {
		group: 'options',
		plugins: [animations()],
	});

	const [inactiveList, inactiveItems, setInactive] = useDragAndDrop<
		HTMLUListElement,
		CodePattern
	>([], {
		group: 'options',
		plugins: [animations()],
	});

	useEffect(() => {
		if (activeOptionCode.length > 0) {
			setActive(activeOptionCode);
		}
	}, [activeOptionCode, setActive]);

	useEffect(() => {
		if (inactiveOptionCode.length > 0) {
			setInactive(inactiveOptionCode);
		}
	}, [inactiveOptionCode, setInactive]);

	useEffect(() => {
		update('activeOptionCode', activeItems);
	}, [activeItems, update]);

	useEffect(() => {
		update('inactiveOptionCode', inactiveItems);
	}, [inactiveItems, update]);

	return (
		<SectionHeaderCard title='옵션 코드'>
			<SectionHeaderCard.Body>
				<div className='kanban-board'>
					<DraggableCodeItemList
						ref={activeList}
						active
					>
						{activeItems.map((code) => (
							<DraggableCodeItem
								key={code.id}
								active
								fieldName={code.field}
							/>
						))}
					</DraggableCodeItemList>
					<div className='h-[2px] w-full bg-gray-300'></div>
					<DraggableCodeItemList
						ref={inactiveList}
						active={false}
					>
						{inactiveItems.map((code) => (
							<DraggableCodeItem
								key={code.id}
								active={false}
								fieldName={code.field}
							/>
						))}
					</DraggableCodeItemList>
				</div>
			</SectionHeaderCard.Body>
		</SectionHeaderCard>
	);
};

export default OptionsCodeCard;

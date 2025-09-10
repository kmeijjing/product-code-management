import { useEffect } from 'react';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { animations } from '@formkit/drag-and-drop';
import { useProductCodeStore } from '@/stores/useProductCodeStore';
import type { CodePattern } from '@/types/codePattern';
import DraggableCodeItem from '@/components/DraggableCodeItem';
import DraggableCodeItemList from '@/components/DraggableCodeItemList';
import SectionHeaderCard from '@/components/SectionHeaderCard';

const ProductCodeCard = () => {
	const { activeProductCode, inactiveProductCode, update } =
		useProductCodeStore();

	const [activeList, activeItems, setActive] = useDragAndDrop<
		HTMLUListElement,
		CodePattern
	>([], {
		group: 'product',
		plugins: [animations()],
	});

	const [inactiveList, inactiveItems, setInactive] = useDragAndDrop<
		HTMLUListElement,
		CodePattern
	>([], {
		group: 'product',
		plugins: [animations()],
	});

	useEffect(() => {
		if (activeProductCode.length > 0) {
			setActive(activeProductCode);
		}
	}, [activeProductCode, setActive]);

	useEffect(() => {
		if (inactiveProductCode.length > 0) {
			setInactive(inactiveProductCode);
		}
	}, [inactiveProductCode, setInactive]);

	useEffect(() => {
		update('activeProductCode', activeItems);
	}, [activeItems, update]);

	useEffect(() => {
		update('inactiveProductCode', inactiveItems);
	}, [inactiveItems, update]);

	return (
		<SectionHeaderCard title='상품 코드'>
			<SectionHeaderCard.Body>
				<div className='kanban-board'>
					<DraggableCodeItemList
						ref={activeList}
						active
					>
						{activeItems.map((code) => (
							<DraggableCodeItem
								key={code.id}
								fieldName={code.field}
								active
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
								fieldName={code.field}
								active={false}
							/>
						))}
					</DraggableCodeItemList>
				</div>
			</SectionHeaderCard.Body>
		</SectionHeaderCard>
	);
};

export default ProductCodeCard;

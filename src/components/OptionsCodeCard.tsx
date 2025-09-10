import { useEffect } from 'react';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { animations } from '@formkit/drag-and-drop';
import { useOptionCodeStore } from '@/stores/useOptionCodeStore';
import { CodePattern } from '@/types/codePattern';
import SectionHeaderCard from '@/components/SectionHeaderCard';
import DraggableCodeItemList from '@/components/DraggableCodeItemList';
import DraggableCodeItem from '@/components/DraggableCodeItem';
import { IoAlertCircle } from 'react-icons/io5';

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
						<>
							{!activeItems.length ? (
								<div className='flex h-full w-full items-center justify-center gap-x-[4px] text-[12px]'>
									<IoAlertCircle className='text-gray-400' />
									<span className='text-gray-500'>
										최소 1개의 항목은 필수로 사용해야합니다.
									</span>
								</div>
							) : (
								activeItems.map((code) => (
									<DraggableCodeItem
										key={code.id}
										active
										fieldName={code.field}
										codePattern={code}
									/>
								))
							)}
						</>
					</DraggableCodeItemList>
					<div className='h-[2px] w-full bg-gray-300'></div>
					<strong className='mx-[20px] mt-[16px] block border-b border-gray-200 pb-[12px] text-[12px] text-gray-500'>
						미사용 항목
					</strong>

					<DraggableCodeItemList
						ref={inactiveList}
						active={false}
					>
						{inactiveItems.map((code) => (
							<DraggableCodeItem
								key={code.id}
								active={false}
								fieldName={code.field}
								codePattern={code}
							/>
						))}
					</DraggableCodeItemList>
				</div>
			</SectionHeaderCard.Body>
		</SectionHeaderCard>
	);
};

export default OptionsCodeCard;

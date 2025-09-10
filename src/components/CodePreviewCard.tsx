import SectionHeaderCard from '@/components/SectionHeaderCard';

const CodePreview = () => {
	return (
		<SectionHeaderCard
			title='코드 미리보기'
			subTitle='미리보기는 등록된 코드의 최상단 값으로 노출됩니다.'
		>
			<SectionHeaderCard.Body>
				<div className='px-[24px] py-[16px]'>code preview</div>
			</SectionHeaderCard.Body>
		</SectionHeaderCard>
	);
};

export default CodePreview;

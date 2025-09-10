import SectionHeaderCard from '@/components/SectionHeaderCard';

export default function Home() {
	console.log('home');
	return (
		<>
			<SectionHeaderCard
				title='코드 미리보기'
				subTitle='미리보기는 등록된 코드의 최상단 값으로 노출됩니다.'
			>
				<SectionHeaderCard.Body>aaa</SectionHeaderCard.Body>
			</SectionHeaderCard>
		</>
	);
}

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import { ModalProvider } from '@/contexts/ModalProvider';

const pretendard = localFont({
	src: '../../public/fonts/PretendardVariable.woff2',
	display: 'swap',
	weight: '100 900',
	variable: '--font-pretendard',
});

export const metadata: Metadata = {
	title: 'Product Code Management',
	description: 'Product Code Management System',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${pretendard.className} antialiased`}>
				<ModalProvider>
					<main className='h-full bg-gray-50'>{children}</main>
				</ModalProvider>
			</body>
		</html>
	);
}

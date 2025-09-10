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
					<header className='fixed top-0 right-0 left-0 z-20 h-[52px] border-b border-gray-300 bg-white'>
						<div className='mx-auto flex h-[52px] max-w-[1366px] items-center justify-center px-4'>
							<h1 className='text-center text-xl font-bold'>
								Product Code Management
							</h1>
						</div>
					</header>
					<main className='h-full bg-gray-50 pt-[52px]'>{children}</main>
				</ModalProvider>
			</body>
		</html>
	);
}

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import RootLayoutClient from './RootLayoutClient'

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode
	params: { locale: string }
}>) {
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body className='bg-neutral-light'>
				<NextIntlClientProvider messages={messages}>
					<RootLayoutClient>{children}</RootLayoutClient>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}

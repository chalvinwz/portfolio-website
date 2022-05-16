import Header from './Header'
import Footer from './Footer'

import { Container } from '@mantine/core'

import Head from 'next/head'

export type Props = {
	children: JSX.Element
	title?: string
}

const Layout = ({ children, title }: Props) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<Header />
			<Container my={80} size='lg'>
				{children}
			</Container>
			<Footer />
		</>
	)
}

export default Layout

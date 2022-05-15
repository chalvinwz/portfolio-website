import React from 'react'

import type { Meta } from '../types/type'

import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'

import { Container } from '@mantine/core'

export type Props = {
	children: JSX.Element
	meta?: Meta
}

const Layout = ({ children, meta }: Props) => {
	return (
		<>
			<Header />
			<Container size='lg'>
				{meta && <Banner meta={meta} />}

				{children}
			</Container>
			<Footer />
		</>
	)
}

export default Layout

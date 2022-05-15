import React from 'react'

import type { Meta } from '../types/type'

import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'

import { Container } from '@mantine/core'

import Head from 'next/head'

export type Props = {
	children: JSX.Element
	meta?: Meta
	title?: string
}

const Layout = ({ children, meta, title }: Props) => {
	return (
		<>
			<Head>
				<title>{title || meta?.title}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

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

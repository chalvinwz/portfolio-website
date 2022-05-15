import Link from 'next/link'
import React from 'react'

import { data } from './data'

import Layout from '../../components/Layout'
import { Anchor, Group } from '@mantine/core'

const Blog = () => {
	return (
		<Layout title='Blog - Chalvin Wiradhika'>
			<Group spacing={20}>
				{data.links.map((link) => (
					<Link href={link.link} key={link.label} passHref>
						<Anchor>{link.label}</Anchor>
					</Link>
				))}
			</Group>
		</Layout>
	)
}

export default Blog

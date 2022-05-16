import Link from 'next/link'

import { getSortedPostsData } from '../../utils/posts'

import Layout from '../../components/Layout'
import { Anchor, Grid, Group, Image, Title } from '@mantine/core'
import Date from '../../components/Date'
import CardBlog from '../../components/CardBlog'

type Data = {
	slug: string
	date: string
	title: string
	image: string
}

const Blog = ({ allPostsData }: any) => {
	return (
		<Layout title='Blog - Chalvin Wiradhika'>
			<>
				<Title mb='lg' order={2}>
					Blog
				</Title>
				<Grid>
					{allPostsData.map((postData: Data) => (
						<Grid.Col span={4} key={postData.slug}>
							<CardBlog postData={postData} />
						</Grid.Col>
					))}
				</Grid>
			</>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default Blog

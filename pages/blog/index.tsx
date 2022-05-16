import { getSortedPostsData } from '../../utils/posts'

import Layout from '../../components/Layout'
import { Grid, Title } from '@mantine/core'
import CardBlog from '../../components/CardBlog'
import MarginBox from '../../components/MarginBox'

type Data = {
	slug: string
	date: string
	title: string
	image: string
}

const Blog = ({ allPostsData }: any) => {
	return (
		<Layout title='Blog - Chalvin Wiradhika'>
			<MarginBox>
				<Title mb='lg' order={2}>
					Blog
				</Title>
				<Grid>
					{allPostsData.map((postData: Data) => (
						<Grid.Col sm={6} lg={4} key={postData.slug}>
							<CardBlog postData={postData} />
						</Grid.Col>
					))}
				</Grid>
			</MarginBox>
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

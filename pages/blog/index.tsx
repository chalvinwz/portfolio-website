import Link from 'next/link'

import { getSortedPostsData } from '../../utils/posts'

import Layout from '../../components/Layout'
import {
	Anchor,
	Box,
	createStyles,
	Grid,
	Group,
	Image,
	Title,
} from '@mantine/core'
import Date from '../../components/Date'
import CardBlog from '../../components/CardBlog'

type Data = {
	slug: string
	date: string
	title: string
	image: string
}

const useStyles = createStyles((theme) => ({
	box: {
		margin: 80,

		[`@media (max-width: ${theme.breakpoints.lg}px)`]: {
			margin: 60,
		},

		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			margin: 40,
		},

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			margin: 20,
		},
	},
}))

const Blog = ({ allPostsData }: any) => {
	const { classes, cx } = useStyles()
	return (
		<Layout title='Blog - Chalvin Wiradhika'>
			<Box className={classes.box}>
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
			</Box>
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

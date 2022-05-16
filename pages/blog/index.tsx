import Link from 'next/link'

import { getSortedPostsData } from '../../utils/posts'

import Layout from '../../components/Layout'
import { Anchor, Group } from '@mantine/core'
import Date from '../../components/Date'

type Data = {
	slug: string
	date: string
	title: string
}

const Blog = ({ allPostsData }: any) => {
	return (
		<Layout title='Blog - Chalvin Wiradhika'>
			<>
				<h2>Blog</h2>
				<Group>
					<ul>
						{allPostsData.map(({ slug, date, title }: Data) => (
							<li key={slug}>
								<Link href={`blog/${slug}`} passHref>
									<Anchor>{title}</Anchor>
								</Link>
								<br />
								<Date dateString={date} />
							</li>
						))}
					</ul>
				</Group>
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

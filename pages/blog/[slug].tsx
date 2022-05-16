import { Text } from '@mantine/core'
import Date from '../../components/Date'
import Layout from '../../components/Layout'
import { getAllPostSlugs, getPostData } from '../../utils/posts'

const Post = ({ postData }: any) => {
	return (
		<Layout title={postData.title}>
			<div>
				{postData.title}
				<br />
				{postData.slug}
				<br />
				<Date dateString={postData.date} />
				<br />
				<Text size='xl'>
					<div dangerouslySetInnerHTML={{ __html: postData.blogContent }} />
				</Text>
			</div>
		</Layout>
	)
}

export async function getStaticPaths() {
	const paths = getAllPostSlugs()
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }: any) {
	const postData = await getPostData(params.slug)
	return {
		props: {
			postData,
		},
	}
}

export default Post

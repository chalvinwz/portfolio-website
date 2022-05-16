import { Text, Title } from '@mantine/core'
import Date from '../../components/Date'
import Layout from '../../components/Layout'
import ReactMarkdown from 'react-markdown'
import { getAllPostSlugs, getPostData } from '../../utils/posts'
import CodeBlock from '../../components/CodeBlock'
import MarginBox from '../../components/MarginBox'

const Post = ({ postData }: any) => {
	return (
		<Layout title={postData.title}>
			<MarginBox>
				<Title order={1}>{postData.title}</Title>
				<Text>{postData.desc}</Text>
				<Date dateString={postData.date} />
				<Text>
					<ReactMarkdown components={CodeBlock}>
						{postData.markdown}
					</ReactMarkdown>
				</Text>
			</MarginBox>
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
	const postData = getPostData(params.slug)
	return {
		props: {
			postData,
		},
	}
}

export default Post

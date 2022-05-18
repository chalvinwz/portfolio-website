import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content')

export function getSortedPostsData() {
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, '')

		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		const matterResult = matter(fileContents)

		return {
			slug,
			...matterResult.data,
		}
	})
	// Sort posts by date
	return allPostsData.sort(({ date: a }: any, { date: b }: any) => {
		if (a < b) {
			return 1
		} else if (a > b) {
			return -1
		} else {
			return 0
		}
	})
}

export function getAllPostSlugs() {
	const fileNames = fs.readdirSync(postsDirectory)

	return fileNames.map((fileName) => {
		return {
			params: {
				slug: fileName.replace(/\.md$/, ''),
			},
		}
	})
}

export function getPostData(slug: string) {
	const fullPath = path.join(postsDirectory, `${slug}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	const matterResult = matter(fileContents)

	return {
		slug,
		markdown: matterResult.content,
		...matterResult.data,
	}
}

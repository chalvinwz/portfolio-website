import React from 'react'
import { createStyles, Card, Image, Text, Stack } from '@mantine/core'
import Date from './Date'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		width: '100%',
		height: '100%',
		'&:hover': {
			boxShadow: theme.shadows.md,
		},
	},

	title: {
		fontWeight: 700,
		lineHeight: 1.2,
	},

	body: {
		padding: theme.spacing.md,
	},
}))

const CardBlog = ({ postData }: any) => {
	const { classes } = useStyles()
	return (
		<Link href={`/blog/${postData.slug}`} passHref>
			<Card
				withBorder
				radius='md'
				p={0}
				className={classes.card}
				component='a'
				shadow='xs'
			>
				<Stack spacing={4}>
					<Card.Section>
						<Image src={postData.image} alt={postData.title} height={160} />
					</Card.Section>

					<Stack spacing={2} className={classes.body}>
						<Text
							transform='uppercase'
							color='dimmed'
							weight={800}
							className={classes.title}
						>
							{postData.title}
						</Text>

						<Text size='xs' color='dimmed'>
							<Date dateString={postData.date} />
						</Text>
					</Stack>
				</Stack>
			</Card>
		</Link>
	)
}

export default CardBlog

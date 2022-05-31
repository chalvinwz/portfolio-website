import {
	createStyles,
	Container,
	Group,
	ActionIcon,
	Text,
	Footer as FooterMantine,
	Anchor,
} from '@mantine/core'
import Link from 'next/link'

import {
	BrandTwitter,
	BrandLinkedin,
	BrandInstagram,
	BrandGithub,
} from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,

		[theme.fn.smallerThan('xs')]: {
			flexDirection: 'column',
		},
	},
}))

const Footer = () => {
	const { classes } = useStyles()

	return (
		<FooterMantine height={60} className={classes.footer}>
			<Container className={classes.inner}>
				<Link href='/' passHref>
					<Text component='a'>Chalvin Wiradhika</Text>
				</Link>

				<Text>
					Made by ❤️ with{' '}
					<Anchor href='https://nextjs.org' target='_blank'>
						Next.js
					</Anchor>
					,{' '}
					<Anchor href='https://mantine.dev' target='_blank'>
						Mantine
					</Anchor>{' '}
					&#38;{' '}
					<Anchor href='https://vercel.com' target='_blank'>
						Vercel
					</Anchor>
				</Text>

				<Group spacing={8} noWrap>
					<ActionIcon
						size='lg'
						component='a'
						href='https://twitter.com/chalvinwz'
					>
						<BrandTwitter size={20} />
					</ActionIcon>
					<ActionIcon
						size='lg'
						component='a'
						href='https://linkedin.com/in/chalvinwiradhika'
					>
						<BrandLinkedin size={20} />
					</ActionIcon>
					<ActionIcon
						size='lg'
						component='a'
						href='https://instagram.com/chalvinwz'
					>
						<BrandInstagram size={20} />
					</ActionIcon>
				</Group>
			</Container>
		</FooterMantine>
	)
}

export default Footer

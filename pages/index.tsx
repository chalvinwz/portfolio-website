import {
	createStyles,
	Container,
	Text,
	Button,
	Group,
	useMantineTheme,
	Title,
	Box,
} from '@mantine/core'
import Layout from '../components/Layout'
import Link from 'next/link'

const BREAKPOINT = '@media (max-width: 768px)'

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		boxSizing: 'border-box',
	},

	inner: {
		position: 'relative',
	},

	title: {
		fontSize: 52,
		fontWeight: 900,
		lineHeight: 1.1,
		margin: 0,
		padding: 0,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,

		[BREAKPOINT]: {
			fontSize: 44,
			lineHeight: 1.2,
		},
	},

	description: {
		marginTop: theme.spacing.xl,
		fontSize: 28,

		[BREAKPOINT]: {
			fontSize: 24,
		},
	},

	controls: {
		marginTop: theme.spacing.xl * 2,

		[BREAKPOINT]: {
			marginTop: theme.spacing.xl,
		},
	},

	control: {
		height: 48,
		paddingLeft: 36,
		paddingRight: 36,

		[BREAKPOINT]: {
			height: 44,
			paddingLeft: 20,
			paddingRight: 20,
			flex: 1,
		},
	},

	githubControl: {
		borderWidth: 2,
		borderColor:
			theme.colorScheme === 'dark' ? 'transparent' : theme.colors.dark[9],
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',

		'&:hover': {
			backgroundColor: `${
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0]
			} !important`,
		},
	},

	box: {
		marginTop: 120,
		marginBottom: 120,

		[`@media (max-width: ${theme.breakpoints.lg}px)`]: {
			marginTop: 100,
			marginBottom: 100,
		},

		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginTop: 80,
			marginBottom: 80,
		},
	},
}))

const Home = () => {
	const { classes, cx } = useStyles()
	const theme = useMantineTheme()

	return (
		<Layout title='Home - Chalvin Wiradhika'>
			<Box className={cx(classes.wrapper, classes.box)}>
				<Container size={700} className={classes.inner}>
					<Title order={1} className={classes.title}>
						Hi, I Am
						<Text
							component='span'
							variant='gradient'
							gradient={{ from: 'blue', to: 'cyan' }}
							inherit
						>
							<br />
							Chalvin Wiradhika
						</Text>{' '}
					</Title>

					<Text className={classes.description} color='dimmed'>
						An Information Technology Student who loves DevOps and Software
						Engineering.
					</Text>

					<Group className={classes.controls}>
						<Link href='/on-going' passHref>
							<Button
								size='lg'
								className={classes.control}
								variant='gradient'
								gradient={{ from: 'blue', to: 'cyan' }}
							>
								Read My Articles
							</Button>
						</Link>

						<Link href='/on-going' passHref>
							<Button
								size='lg'
								variant='outline'
								className={cx(classes.control, classes.githubControl)}
								color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
							>
								See My Projects
							</Button>
						</Link>
					</Group>
				</Container>
			</Box>
		</Layout>
	)
}

export default Home

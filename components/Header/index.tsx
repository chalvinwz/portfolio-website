import Link from 'next/link'

import { useRouter } from 'next/router'

import { data } from './data'

import {
	Anchor,
	Header as HeaderMantine,
	Group,
	Container,
	Text,
	createStyles,
	Burger,
	Transition,
	Paper,
} from '@mantine/core'

import { useBooleanToggle } from '@mantine/hooks'

import DarkMode from './DarkMode'

const useStyles = createStyles((theme) => ({
	root: {
		position: 'relative',
		zIndex: 1,
	},

	dropdown: {
		position: 'absolute',
		top: 60,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: 'hidden',

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%',
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('xs')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
			textDecoration: 'none	',
		},

		[theme.fn.smallerThan('sm')]: {
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
					: theme.colors[theme.primaryColor][0],
			color:
				theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
		},
	},
}))

const Header = () => {
	const { classes, cx } = useStyles()
	const [opened, toggleOpened] = useBooleanToggle(false)
	const router = useRouter()

	const navLink = data.links.map((link) => (
		<Link href={link.link} key={link.label} passHref>
			<Anchor
				component='a'
				className={`${classes.link} ${
					router.pathname === link.link ? classes.linkActive : ''
				}`}
			>
				{link.label}
			</Anchor>
		</Link>
	))

	return (
		<>
			<HeaderMantine height={60} mb={80} className={classes.root}>
				<Container size='xl' className={classes.header}>
					<Group>
						<Text>Chalvin Wiradhika</Text>
					</Group>
					<Group position='right' spacing={40} className={classes.links}>
						{navLink}
						<DarkMode />
					</Group>

					<Group className={classes.burger}>
						<DarkMode />
						<Burger opened={opened} onClick={() => toggleOpened()} size='sm' />
					</Group>

					<Transition
						transition='pop-top-right'
						duration={200}
						mounted={opened}
					>
						{(styles) => (
							<Paper className={classes.dropdown} withBorder style={styles}>
								{navLink}
							</Paper>
						)}
					</Transition>
				</Container>
			</HeaderMantine>
		</>
	)
}

export default Header

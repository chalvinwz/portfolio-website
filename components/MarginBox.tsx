import { Box, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
	box: {
		marginTop: 80,
		marginBottom: 80,

		[`@media (max-width: ${theme.breakpoints.lg}px)`]: {
			marginTop: 60,
			marginBottom: 60,
		},

		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginTop: 40,
			marginBottom: 40,
		},

		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			margin: 20,
		},
	},
}))

const MarginBox = ({ children }: any) => {
	const { classes, cx } = useStyles()
	return <Box className={classes.box}>{children}</Box>
}

export default MarginBox

import { BackgroundImage, createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
	banner: {},
}))

const Banner = ({ postData }: any) => {
	const { classes, cx } = useStyles()

	return (
		<BackgroundImage src={postData.image} className={classes.banner}>
			Banner
		</BackgroundImage>
	)
}

export default Banner

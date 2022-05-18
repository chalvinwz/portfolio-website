import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { MoonStars, Sun } from 'tabler-icons-react'

const DarkMode = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()

	return (
		<>
			<ActionIcon
				variant='default'
				onClick={() => toggleColorScheme()}
				size={32}
			>
				{colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
			</ActionIcon>
		</>
	)
}

export default DarkMode

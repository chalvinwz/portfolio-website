import type { AppProps } from 'next/app'

import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core'

import { useHotkeys, useLocalStorage } from '@mantine/hooks'

function MyApp({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	})

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

	useHotkeys([['mod+J', () => toggleColorScheme()]])

	const theme = {
		colorScheme: colorScheme,
		fontFamily: 'Poppins, sans serif',
	}

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
				<Component {...pageProps} />
			</MantineProvider>
		</ColorSchemeProvider>
	)
}

export default MyApp

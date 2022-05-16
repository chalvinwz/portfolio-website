import type { AppProps } from 'next/app'

import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

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

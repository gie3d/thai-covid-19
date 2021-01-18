import { ThemeProvider, CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import customTheme from '@/styles/theme';

const GlobalStyle = ({ children }) => {
	return (
		<>
			<CSSReset />
			<Global
				styles={css`
					html {
						scroll-behavior: smooth;
					}
					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
					}
				`}
			/>
			{children}
		</>
	);
};

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={customTheme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;

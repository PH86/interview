import React from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";

import "App.css";
import { useTheme } from 'themes/themeManager';
import { Routes } from "utils/Routes";


const App: React.FC<{}> = (): React.ReactElement => {
	const theme = useTheme();

	return (
		<ThemeProvider theme={{ mode: theme.mode }}>
			<ModalProvider>
				<AnimatePresence exitBeforeEnter>
					<Routes /> 
				</AnimatePresence>
			</ModalProvider>
		</ThemeProvider>

	);
}

export default App;

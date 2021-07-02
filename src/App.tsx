import React from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";

import "App.css";
import { useTheme } from 'themes/themeManager';

import { useAppContext } from "hooks/useAppContext";
import { SignIn } from "pages/SignIn/SignIn";
import AuthorisedArea from 'AuthorisedArea'; 

const App: React.FC<{}> = (): React.ReactElement => {
	const theme = useTheme();
	const { loggedIn } = useAppContext()

	const renderScreen = () => (
		!loggedIn ? (
			<SignIn />
		) : ( 
			<AuthorisedArea />
		)
	)

	return (
		<ThemeProvider theme={{ mode: theme.mode }}>
				 <>
					<ModalProvider>
					<AnimatePresence exitBeforeEnter>
						{renderScreen()}
					</AnimatePresence>
					</ModalProvider>
				</>
		</ThemeProvider>
	);
}

export default App;

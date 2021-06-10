import React from 'react';

export interface IAppContext {
	loggedIn: boolean;
	setLoggedIn: (loggedIn: boolean) => void;
	openModal: boolean;
	setOpenModal: (openModal: boolean) => void;
}

export const AppContext = React.createContext<IAppContext>(undefined!);

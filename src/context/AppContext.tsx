import { createContext, FC, useState} from 'react';

export interface IAppState {
	openModal: boolean;
}

interface IAppContext {
	appState: IAppState, 
	setAppState: React.Dispatch<React.SetStateAction<IAppState>>
};

const AppContext = createContext({} as IAppContext);

const AppContextProvider: FC = (props: any) => {
	const [appState, setAppState] = useState<IAppState>({
		openModal: false,
	})

	const value = { appState, setAppState}

	return (
		<AppContext.Provider value={value}>
			{props.children}
		</AppContext.Provider>
	)
}

export {AppContext, AppContextProvider}
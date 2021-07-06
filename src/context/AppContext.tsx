import { createContext, FC, useState} from 'react';

export interface IAppState {
	openModal: boolean;
}

type IAppContext = [IAppState, React.Dispatch<React.SetStateAction<IAppState>>];

const AppContext = createContext<IAppContext>([{openModal: false}, () => null]);

const AppContextProvider: FC = (props: any) => {
	const [appState, setAppState] = useState<IAppState>({
		openModal: false,
	})

	return (
		<AppContext.Provider value={[appState, setAppState]}>
			{props.children}
		</AppContext.Provider>
	)
}

export {AppContext, AppContextProvider}
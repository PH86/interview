import { createContext, FC, useState} from 'react';

export interface IAppState {
	loggedIn?: boolean;
	// setLoggedIn: (loggedIn: boolean) => void;
	openModal?: boolean;
	// setOpenModal: (openModal: boolean) => void;
	showVacancy?: boolean;
	// setShowVacancy: (showVacancy: boolean) => void;
	jobForm?: {
		jobTitle: string;
		companyName: string;
		location: string;
		companyDescription: string;
		salaryMin: string;
		salaryMax: string;
		endDate: string;
		jobDescription: string;
		essentialRequirments: string[];
		desiredRequirments: string[];
		responsibilities: string[];
	}
	// setJobForm: ( jobForm: {jobTitle: string,
	// 	companyName: string;
	// 	location: string;
	// 	companyDescription: string;
	// 	salaryMin: string;
	// 	salaryMax: string;
	// 	endDate: string;
	// 	jobDescription: string;
	// 	essentialRequirments: string[];
	// 	desiredRequirments: string[];
	// 	responsibilities: string[]}) => void
}

type IAppContext = [IAppState, React.Dispatch<React.SetStateAction<IAppState>>];

const AppContext = createContext<IAppContext>([{}, () => null]);

const AppContextProvider: FC = (props: any) => {
	const [appState, setAppState] = useState<IAppState>({
		loggedIn: false,
		openModal: false,
		showVacancy: false,
		jobForm: {
			jobTitle: '',
			companyName: '',
			location: '',
			companyDescription: '',
			salaryMin: '',
			salaryMax: '',
			endDate: '',
			jobDescription: '',
			essentialRequirments: [] as string[],
			desiredRequirments: [] as string[],
			responsibilities: [] as string[]
		}
	})

	return (
		<AppContext.Provider value={[appState, setAppState]}>
			{props.children}
		</AppContext.Provider>
	)
}

export {AppContext, AppContextProvider}
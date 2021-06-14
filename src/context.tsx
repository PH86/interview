import React from 'react';

export interface IAppContext {
	loggedIn: boolean;
	setLoggedIn: (loggedIn: boolean) => void;
	openModal: boolean;
	setOpenModal: (openModal: boolean) => void;
	showVacancy: boolean;
	setShowVacancy: (showVacancy: boolean) => void;
	jobForm: {
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
	setJobForm: ( jobForm: {jobTitle: string,
		companyName: string;
		location: string;
		companyDescription: string;
		salaryMin: string;
		salaryMax: string;
		endDate: string;
		jobDescription: string;
		essentialRequirments: string[];
		desiredRequirments: string[];
		responsibilities: string[]}) => void
}

export const AppContext = React.createContext<IAppContext>(undefined!);

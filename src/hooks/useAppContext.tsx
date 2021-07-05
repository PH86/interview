import { useContext } from 'react';

import { AppContext } from 'context/AppContext';

export const useAppContext = () => {	
    const [appState, setAppState] = useContext(AppContext);
  
    const setOpenModal = () => {
        setAppState(appState => ({...appState, openModal: !appState.openModal}))
    }

    const setShowVacancy = () => {
        setAppState(appState => ({...appState, showVacancy: !appState.showVacancy}))
    }

    const setJobForm = (data: {}) => {
        console.log(data);
        // setAppState(appState => ({...appState, jobForm: data}))
    }

    return { 
        openModal: appState.openModal,
        showVacancy: appState.showVacancy,
        jobForm: appState.jobForm,
        setOpenModal,
        setShowVacancy,
        setJobForm,
    };
}


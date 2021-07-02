import { useContext, useState } from 'react';

import { AppContext } from 'context/AppContext';
import { urls } from 'utils/constants';
import history from 'utils/history';

export const useAppContext = () => {	
    const [appState, setAppState] = useContext(AppContext);
    console.log(appState);
    
    const signIn = (token: string) => {
        localStorage.setItem('token', token);
        setAppState(appState => ({...appState, loggedIn: true}))
    }

    const signOut = () => {
        setAppState(appState => ({...appState, loggedIn: false}))
        localStorage.removeItem('token');
		history.push(urls.signIn)
    }

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
        loggedIn: appState.loggedIn, 
        openModal: appState.openModal,
        showVacancy: appState.showVacancy,
        jobForm: appState.jobForm,
        signIn, 
        signOut,
        setOpenModal,
        setShowVacancy,
        setJobForm,
    };
}


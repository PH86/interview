import { useContext } from 'react';

import { AppContext } from 'context/AppContext';

export const useAppContext = () => {	
    const { appState, setAppState } = useContext(AppContext);

    const setOpenModal = () => {
        setAppState(appState => ({...appState, openModal: !appState.openModal}))
    }

    return { 
        openModal: appState.openModal,
        setOpenModal,
    };
}

 
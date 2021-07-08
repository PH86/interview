import { useContext } from "react";

import { AppContext } from "context/AppContext";

export const useAppContext = () => {
  const { appState, setAppState } = useContext(AppContext);

  const setOpenModal = () => {
    setAppState((prev) => ({
      ...prev,
      openModal: !appState.openModal,
    }));
  };

  return {
    openModal: appState.openModal,
    setOpenModal,
  };
};

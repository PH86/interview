import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "context/AuthContext";
import { url } from "utils/constants";

export const useAuthContext = () => {
  const { authState, setAuthState } = useContext(AuthContext);

  const history = useHistory();

  const signIn = async (value: string) => {
    setAuthState((prev) => ({ ...prev, token: value }));
    localStorage.setItem("token", value);
    history.push(url.dashboard);
  };

  const signOut = () => {
    setAuthState((prev) => ({ ...prev, user: {} }));
    localStorage.removeItem("token");
    history.push(url.signIn);
  };

  return {
    user: authState.user,
    token: authState.token,
    signIn,
    signOut,
  };
};

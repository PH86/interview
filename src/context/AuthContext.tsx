import { createContext, FC, useState } from "react";

export interface IAuthState {
  user:
    | {
        id: number;
        email: string;
      }
    | Record<string, unknown>;
  token?: string;
}

interface IAuthContext {
  authState: IAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>;
}

// type IAuthContext = [IAuthState, React.Dispatch<React.SetStateAction<IAuthState>>];

const AuthContext = createContext({} as IAuthContext);

const AuthContextProvider: FC = ({ children }) => {
  const [authState, setAuthState] = useState<IAuthState>({
    user: {
      id: 0,
      email: "test",
    },
  });

  const value = { authState, setAuthState };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };

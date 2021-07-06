import { createContext, FC, useState} from 'react';

export interface IAuthState {
	user: {
        id: number;
        email: string;
    } | {};
    token?: string
}

type IAuthContext = [IAuthState, React.Dispatch<React.SetStateAction<IAuthState>>];

const AuthContext = createContext<IAuthContext>([{user: {}}, () => null]);

const AuthContextProvider: FC = (props: any) => {
	const [authState, setAuthState] = useState<IAuthState>({ user: {}})

	return (
		<AuthContext.Provider value={[authState, setAuthState]}>
			{props.children}
		</AuthContext.Provider>
	)
}

export {AuthContext, AuthContextProvider}
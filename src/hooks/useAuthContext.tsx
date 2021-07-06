import { useContext } from 'react';
import { useHistory } from 'react-router';

import { AuthContext } from 'context/AuthContext';
import { url } from 'utils/constants';

export const useAuthContext = () => {	
    const [authState, setAuthState] = useContext(AuthContext);
    const history = useHistory();

    const signIn = async (value: string) => {
        setAuthState(authState => ({...authState, token: value}))
        localStorage.setItem('token', value)
        history.push(url.dashboard)
    }

    const signOut = () => {
        setAuthState(authState => ({...authState, user: {}}))
        localStorage.removeItem('token');
		history.push(url.signIn)
    }

    const resetPassword = (email: string) => {
        fetch(`${process.env.REACT_APP_API_URL}/password-reset`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              'Accepts': 'application/json'
            },
            body: JSON.stringify(email)
          })
          .then((response) => {
            if (response.ok) {
                return response.json();
              } else {
                throw new Error('Something went wrong');
              }
          })
    }

    return {
        user: authState.user,
        token: authState.token,
        signIn, 
        signOut,
        resetPassword
    };
}


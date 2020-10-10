import React, { createContext, useState, useContext } from 'react';

import * as authServices from '../services/auth';

interface AuthContextData {
    signed: boolean;
    user: Object | null;
    signIn(): Promise<void>;
    logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

    const [user, setUser] = useState<Object | null>(null);

    async function signIn() {
        const response = await authServices.signIn();
        
        const {token, user} = response;

        setUser(user);
    }

    function logout() {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user, 
            user,
            signIn, 
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export default AuthContext;

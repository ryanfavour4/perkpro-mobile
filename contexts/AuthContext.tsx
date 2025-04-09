import { useRouter } from "expo-router";
import { createContext, useContext, useEffect } from "react";
import { useSelector } from "react-redux";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
    const router = useRouter();
    const { isAuthenticated } = useSelector((state: { auth: { isAuthenticated: boolean, userData: any } }) => state.auth);

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         console.log('Redirecting to login...');
    //         router.replace('/auth/login');
    //     }
    // }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

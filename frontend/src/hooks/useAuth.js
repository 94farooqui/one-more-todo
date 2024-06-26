import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { login, register } from './../api/auth';
import { getToken, setToken } from './../utils/token';
// import { removeToken } from './../utils/token';

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = getToken();
        if (token) {
            // Fetch user details if needed using token
            // For simplicity, we assume user is already known and set directly
            setUser({ token });
        }
        setLoading(false);
    }, [setUser]);

    const handleLogin = async (email, password) => {
        const response = await login({ email, password });
        console.log(response)
        setToken(response.data.token);
        setUser(response.data.user);
    };

    const handleRegister = async (userData) => {
        console.log(userData)
        const response = await register(userData);
        if (response) {
            console.log(response)
            setToken(response.data.token);
            setUser(response.data.user);
            return {message:"User Created Successfully!", result: "success"}
        }
        else return {message:"Error In User Registeration!", result: "fail"}

    };

    //   const handleLogout = () => {
    //     removeToken();
    //     setUser(null);
    //   };

    return {
        user,
        loading,
        login: handleLogin,
        register: handleRegister,
        // logout: handleLogout,
    };
};

export default useAuth;

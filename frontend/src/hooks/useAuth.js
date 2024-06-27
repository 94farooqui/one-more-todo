import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { login, register } from './../api/auth';
import { getToken, removeToken, setToken } from './../utils/token';
import { getUser } from '../utils/user';
// import { removeToken } from './../utils/token';

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initilizeAuth = async () => {
            const token = getToken();
            if (token) {
                try{
                    const fetchedUser = await getUser()
                // Fetch user details if needed using token
                // For simplicity, we assume user is already known and set directly
                setUser(fetchedUser);
                }
                catch(error){
                    removeToken();
                    setUser(null)
                }
            }
            setLoading(false);
        }
        initilizeAuth()
        
    }, [setUser]);

    const handleLogin = async (user) => {
        const { email, password } = user
        console.log(email, password)
        const response = await login({ email, password });
        if (response.status) {
            console.log(response)
            setToken(response.token);
            setUser(response.user);
            return true
        }
        else return false

    };

    const handleRegister = async (userData) => {
        console.log(userData)
        const response = await register(userData);
        if (response) {
            console.log(response)
            setToken(response.data.token);
            setUser(response.data.user);
            return { message: "User Created Successfully!", result: "success" }
        }
        else return { message: "Error In User Registeration!", result: "fail" }

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

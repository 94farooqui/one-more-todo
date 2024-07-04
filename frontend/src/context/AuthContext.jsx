import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // const [user,setUser] = useState({username:"Johnty Rhodes", email:"johnty@sa.com"})
    // console.log("Auth context")

    const [user,setUser] = useState()

  return (<AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>);
};


export default AuthContextProvider
const serverURL = import.meta.env.VITE_SERVER_URL
import axios from 'axios'

export const login = async ({ email, password }) => {
    try{
        const response = await axios.post(`${serverURL}/auth/login`,{email,password})
        if(response.status == 200){
            return {status:"success", token: response.data.token, user: response.data.user}
        }
    }
    catch(error){

    }
}

export const logout = () => {

}

export const register = async (data) => {
    console.log(data)
    try{
        const response = await axios.post(`${serverURL}/auth/signup`,data)
        console.log(`Sending request to ${serverURL}/auth/signup`)
        if(response.status == 201){
            console.log(response)
            return {status:true, data: response.data}
        }
        else return false
    }
    catch(error){

    }
}

export const getUserDetails = async (token) => {
    try{
        const response = await axios.get(`${serverURL}/user/${token}`)
        if(response.status == 200){
            return response.data.user
        }
    }catch(error){
        
    }
}

export const getUserData = async (token) =>{
    console.log(`${serverURL}/user/mydata Requesting ${token}`)
    try{
        const response = await axios.get(`${serverURL}/user/mydata`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        if(response.status == 200){
            console.log(response.data)
            return response.data
        }
    }catch(error){
        
    }
}
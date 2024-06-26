const serverURL = import.meta.env.VITE_SERVER_URL
import axios from 'axios'

export const login = async (username,password) => {
    try{
        const response = await axios.post()
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
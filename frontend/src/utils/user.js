import { getUserDetails } from "../api/auth"

export const getUser = async () => {
    const token = localStorage.getItem("token")
    const user = await getUserDetails(token)
    return user
}
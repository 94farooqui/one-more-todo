const serverURL = import.meta.env.VITE_SERVER_URL
import axios from 'axios'

export const getAllTasks = async (token) => {
  // console.log("Fetching All Takss")
  console.log(serverURL)
    try {
        const response = await axios.get(`${serverURL}/task`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
}

export const addOneTask = async ({data}, token) => {
  console.log(token)
  try {
    const response = await axios.post(`${serverURL}/task`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks', error);
  }
}
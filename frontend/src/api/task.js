const serverURL = import.meta.env.VITE_SERVER

export const getAllTasks = async (token) => {
    try {
        const response = await axios.get(`${serverURL}/tasks`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
}

export const addOneTask = async () => {

}
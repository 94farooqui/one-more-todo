import { useContext, useState, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { getToken } from "./../utils/token";
import { getAllTasks, addOneTask, updateOneTask } from "../api/task";
import { getUserData } from "../api/auth";

const useTask = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = getToken();

        if (token) {
          // console.log("Fetching token")
          const response = await getUserData(token);
          // console.log("Fetching takss")
          if(response){
            setTasks(response.tasks);
          }
         
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [setTasks]);

  const handleAddTask = async (data) => {
    setLoading(true);
    try {
      const token = getToken();

      if (token) {
        const response = await addOneTask({ data }, token);
        if (response) {
          setTasks((prevTasks) => [...prevTasks, response]);
          console.log(response);
          return true;
        }
      }
    } catch (error) {
      setError(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTask = async (task) => {
    console.log("Request received")
    setLoading(true);
    try {
      const token = getToken();

      if (token) {
        const updatedTask = await updateOneTask({ task }, token);
        if (updatedTask) {
            console.log(updatedTask)
        //   const previousTask = tasks.filter(task => task._id ==updatedTask._id);
        //   setTasks({...previousTask, updatedTask});
          console.log("After Update",tasks)
          return true;
        }
      }
    } catch (error) {
      setError(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = () => {};

  return {
    tasks,
    loading,
    error,
    addTask: handleAddTask,
    updateTask: handleUpdateTask,
    deleteTask: handleDeleteTask,
  };
};

export default useTask;

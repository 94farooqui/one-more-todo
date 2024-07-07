
import { useContext, useState, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext'
import { getToken } from './../utils/token'
import { getAllTasks, addOneTask } from '../api/task'

const useTask = () => {

    const { tasks, setTasks } = useContext(TaskContext)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchAllTasks = async ()=>{
            try{
                const token = getToken()

                if(token){
                    // console.log("Fetching token")
                    const response = await getAllTasks(token)
                    setTasks(response)
                }
            }catch(error){
                setError(error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchAllTasks();
    },[setTasks])

    const handleAddTask = async (data) => {
        setLoading(true)
        try{
            const token = getToken()

        if(token){
            const response = await addOneTask({data}, token)
            if(response){
                setTasks(prevTasks => [...prevTasks, response])
                console.log(response)
                return true
            }
        }
        }
        catch(error){
            setError(error)
            return false
        }
        finally{
            setLoading(false)
        }
    }

    const handleUpdateTask = () => {

    }

    const handleDeleteTask = () => {

    }

    return {
        tasks, loading, error, addTask:handleAddTask, updateTask: handleUpdateTask, deleteTask : handleDeleteTask
    }

}

export default useTask;


import React, { useContext, useEffect, useState } from "react";
import { TaskDetailsContext } from "../../context/TaskDetailsContext";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineAdd } from "react-icons/md";
import Subtask from "../Subtask/Subtask";
import useTask from "../../hooks/useTask";

import List from "./../../sampleData/List.json";
import Tags from "./../../sampleData/tags.json";
import SimpleFormatDate from "../../utils/SimpleFormatDate";
import ISOFormateDate from "../../utils/ISOFormatDate";

const TaskDetails = () => {
  const {updateTask} = useTask()
  const [taskUpdated, setTaskUpdated] = useState(false);
  const { taskDetailsVisible, setTaskDetailsVisible } =
    useContext(TaskDetailsContext);
  const { currentTask, setCurrentTask } = useContext(TaskDetailsContext);
  const { tasks, loading, error } = useTask();
  const [task, setTask] = useState();

  const handleTaskChange = (e) => {
    setTaskUpdated(true);
    if (e.target.name == "due_date") {
      const formattedDate = ISOFormateDate(e.target.value);
      setTask({ ...task, [e.target.name]: formattedDate });
    } else setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleTaskUpdate = async (e) => {
    e.preventDefault();
    // setTask({...task, due_date: ISOFormateDate(task.due_date) })
    console.log(task);
    const updated = await updateTask(task)
    if(updated)[
      alert("Task has been updated")
    ]
  };

  useEffect(() => {
    console.log("Task Details Page");
    console.log("Current Task", currentTask);
    const foundTask = tasks.find((item) => item._id == currentTask);
    setTask(foundTask);
    console.log(foundTask);
  }, [currentTask]);

  if (task) {
    return (
      <div className="text-stone-600 h-screen p-4  ">
        <div className="bg-slate-100/50 h-full rounded-lg flex flex-col justify-between">
          <div className="p-6  font-poppins">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold ">Task: </h2>
              <button
                className="text-2xl"
                onClick={() => setTaskDetailsVisible(false)}
              >
                <IoCloseSharp />
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-4 text-sm ">
              <input
                name="title"
                onChange={(e) => {
                  handleTaskChange(e);
                }}
                className="w-full  bg-transparent p-4 rounded-md border font-semibold focus:outline-none focus:border-2 focus:border-slate-900"
                defaultValue={task.title}
              />

              <textarea
                name="description"
                onChange={(e) => {
                  handleTaskChange(e);
                }}
                className="bg-transparent resize-none w-full p-4 rounded-md border  font-semibold focus:outline-none focus:border-2 focus:border-slate-900"
                placeholder="Description"
                rows="4"
                defaultValue={task.desription}
              />

              <div className="text-left text-sm text-stone-600">
                <div className="flex gap-4 items-center">
                  <p className="w-24 font-semibold py-4">List</p>

                  <div className="px-4 py-1 flex-0 border rounded-md bg-slate-200 custom-select-container focus:border-2 focus:border-slate-900">
                    <select
                      onChange={(e) => {
                        handleTaskChange(e);
                      }}
                      className="custom-select"
                      defaultValue={task.listname}
                    >
                      {List.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="w-24 font-semibold py-4">Due date</p>
                  <span className="px-4 py-1 border rounded-md bg-slate-200">
                    <input
                      name="due_date"
                      onChange={(e) => {
                        handleTaskChange(e);
                      }}
                      type="date"
                      defaultValue={SimpleFormatDate(task.due_date)}
                      className="p-1 bg-transparent text-sm"
                    />
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="w-24 font-semibold py-4">Tag</p>
                  <div className="px-4 py-1 flex-0 border rounded-md bg-slate-200 custom-select-container focus:border-2 focus:border-slate-900">
                    <select
                      onChange={(e) => {
                        handleTaskChange(e);
                      }}
                      className="custom-select"
                      defaultValue={task.listname}
                    >
                      {Tags.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xl font-semibold ">Subtasks:</p>

                <div className=" mt-4 flex flex-col gap-4">
                  <div className="self-start flex gap-4 items-center hover:bg-slate-200 hover:cursor-pointer py-2 pr-2 rounded-lg">
                    <MdOutlineAdd
                      style={{ fontWeight: "bold" }}
                      className="text-xl"
                    />
                    Add New Subtask
                  </div>
                  <div className="flex flex-col gap-4">
                    {!task.subtasks.length > 0
                      ? "No Subtasks"
                      : task.subtasks.map((sub) => <p key={sub}>{sub}</p>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center items-center gap-4 font-semibold text-stone-600 p-4">
            <button
              className="px-8 rounded-md border flex-1 py-2"
              onClick={() => setTaskDetailsVisible(false)}
            >
              Cancel
            </button>
            <button
              onClick={handleTaskUpdate}
              className={`px-8 rounded-md border flex-1  py-2 bg-yellow-400 disabled:opacity-50`}
              disabled={!taskUpdated}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default TaskDetails;

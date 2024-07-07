import React, { useContext, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { NewTaskContext } from "../../context/NewTaskContext";
import DatePicker from "react-date-picker";
import Tags from "./../../sampleData/tags.json";
import Priority from "./../../sampleData/priority.json";
import List from "./../../sampleData/List.json";
import CustomList from "../shared/CustomList";

import useTask from './../../hooks/useTask'

export const initalTask = {
  title: "",
  desription: "",
  listname: "",
  priority: "",
  due_date: Date.now(),
  tag: "",
  subtasks: [],
};

const NewTask = () => {
    const { addTask} = useTask()
    const {newTask,setNewTask} = useContext(NewTaskContext)
  const [task, setTask] = useState(initalTask);
  const formRef = useRef(null);

  const buttonsRef = useRef([]);

  const [activeComponent, setActiveComponent] = useState(null);

  const [due_date, setdue_date] = useState("Today");
  const [tag, setTag] = useState(null);
  const [listname, setListname] = useState(null);
  const [priority, setPriority] = useState(null);

  const [currentButton, setCurrentButton] = useState();

  const handleButtons = (e) => {
    e.preventDefault();

    console.log("Button Clicked", e.target.name);
    setActiveComponent(e.target.name);
    console.log("Active compoent", activeComponent);
  };

  const handleOutsideClick = (event) => {
    console.log("Clicked outside buttons")
    // //check click happened on form ,if so then close the list ref
    // console.log(event.target);
    // if (event.target !== buttonsRef.current) {
    //   //   setShowDate(false);
    //   //   setShowTag(false);
    //   //   setShowList(false);
    //   //   setShowPriority(false);
    //   //setActiveComponent(null);
    // }
    if(buttonsRef.current.some((ref) => ref && ref.contains(event.target))){
        console.log("Clicked on buttons")
        setActiveComponent(event.target.name);
    }
    else setActiveComponent(null)
  };

  const onInputChange = (e) => {
    setTask({...task, [e.target.name]:e.target.value})
  };

  const handleDataSelection = (event) => {
    console.log("Value", event.target.textContent);
    setTask({ ...task, [activeComponent]: event.target.textContent });
    console.log(task);
    setActiveComponent(null);
  };

  const hanldeTaskSubmit = async (e) => {
    e.preventDefault()
    console.log(task)
    const response = await addTask(task)
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-screen h-screen z-20 absolute bg-slate-700/40 flex justify-center items-center drop-shadow-lg shadow-black">
      <div className="w-[800px] bg-white rounded-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-700 font-poppins ">
            New Task
          </h2>
          <button className="text-2xl " onClick={()=>setNewTask(false)}>
            <MdClose style={{}} />
          </button>
        </div>
        <form onSubmit={hanldeTaskSubmit} name="inputForm" ref={formRef} className="flex flex-col gap-4">
          <input
            name="title"
            onChange={onInputChange}
            className=" p-2 border-2 border-slate-200 rounded-lg font-semibold text-slate-600"
            placeholder="Task title"
          />
          <textarea
            name="desription"
            onChange={onInputChange}
            className=" p-2 border-2 border-slate-200 resize-none rounded-lg font-medium text-slate-600"
            placeholder="Description"
          />
          <div className="flex gap-2">
            <div className="relative">
              <button
                ref={(el) => (buttonsRef.current[0] = el)}
                name="due_date"
                onClick={(e) => handleButtons(e)}
                className=" px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md"
              >
                {due_date ? due_date : "Today"}
              </button>
              {activeComponent == "due_date" && (
                <input
                  className="absolute top-8 left-0"
                  type="date"
                  onChange={handleDataSelection}
                />
              )}
            </div>

            <div className="relative">
              <button
                ref={(el) => (buttonsRef.current[1] = el)}
                name="listname"
                onClick={(e) => handleButtons(e)}
                className="px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md"
              >
                {task.listname ? task.listname : "List"}
              </button>
              {activeComponent == "listname" && (
                <CustomList data={List} actionMethod={handleDataSelection} />
              )}
            </div>

            <div className="relative">
              <button
                ref={(el) => (buttonsRef.current[2] = el)}
                name="priority"
                onClick={(e) => handleButtons(e)}
                className="px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md"
              >
                {task.priority ? task.priority : "Priority"}
              </button>

              {activeComponent == "priority" && (
                <CustomList
                  data={Priority}
                  actionMethod={handleDataSelection}
                />
              )}
            </div>

            <div className="relative">
              <button
                ref={(el) => (buttonsRef.current[3] = el)}
                name="tag"
                onClick={(e) => handleButtons(e)}
                className="px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md"
              >
                {task.tag ? task.tag : "Tag"}
              </button>
              {activeComponent == "tag" && (
                <CustomList data={Tags} actionMethod={handleDataSelection} />
              )}
            </div>
          </div>

          <button className="bg-slate-700 px-8 py-2 text-lg font-semibold text-slate-100 self-end rounded-lg">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;

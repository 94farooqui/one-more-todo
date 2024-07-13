import React, { useContext, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import ListItem from "../../CustomElements/ListItem";
import TagElement from "../../CustomElements/TagElement";
import { TbArrowsRight } from "react-icons/tb";
import { BsListCheck } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { BsFillStickyFill } from "react-icons/bs";
import TaskItem from "../../CustomElements/TaskItem";
import { IoMdOptions } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import { getUser } from "../../utils/user";
import { IoClose } from "react-icons/io5";
import { ImCheckboxChecked } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

import Tags from './../../sampleData/tags.json'
import Lists from './../../sampleData/List.json'
import { removeToken } from "../../utils/token";

const Sidebar = () => {
  const [sidebarVisible,setSidebarVisible] = useState(true)
  const {user,setUser} = useContext(AuthContext)
  const [newList,setNewList] = useState(null)
  const [addingNewList,setAddingNewList] = useState(false)

  const handleSidebar = () => {
    setSidebarVisible(!sidebarVisible)
    console.log(sidebarVisible)
  }

  const handleAddNewList = (e) => {

  }
  const handleSignout = () => {
    removeToken()
    window.location.reload()
  }
  return (<>
   <div className="w-[320px] h-screen bg-white p-6 font-sans text-white">
      <div className="w-full h-full bg-black rounded-xl flex flex-col justify-between p-4">
        <div className="flex flex-col gap-4 overflow-y-scroll scrollbar-hide pb-8">
          <div className="flex justify-between items-center border-gray-700 border-b pb-2">
            <h4 className="font-bold  text-2xl">Menu</h4>
            <div className="p-1 rounded-lg hover:bg-stone-200 " onClick={handleSidebar}><MdOutlineMenu className="text-2xl" /></div>
          </div>

          <div className="flex gap-2 items-center bg-slate-800 border-2 border-slate-700  p-2 rounded-lg">
            <IoMdSearch className="text-xl text-slate-400" />
            <input
              type="text"
              placeholder="Search"
              className=" w-[70%] inline bg-transparent  text-sm focus:outline-none"
            ></input>
          </div>

          <div className="text-md border-gray-700  border-b py-4">
            <p className="text-xs font-bold mb-2">TASKS</p>
            <ul className="flex flex-col font-medium px-1">
              <TaskItem><TbArrowsRight />Upcoming</TaskItem>
              <TaskItem><FaListUl />Today</TaskItem>
              <TaskItem><BsCalendar3 />Calendar</TaskItem>
              <TaskItem><BsFillStickyFill />Sticky Wall</TaskItem>
              <TaskItem><ImCheckboxChecked />Completed</TaskItem>
            </ul>
          </div>

          <div className="text-md font-medium border-gray-700  border-b py-4">
            <p className="text-xs font-bold mb-2">LISTS</p>
            <ul className="flex flex-col font-medium px-1">
              {Lists.map(list => <ListItem key={list}>{list}</ListItem>)}
              {addingNewList && <div className="flex gap-2 items-center">
                <button onClick={()=>setAddingNewList(false)} className=" rounded-full hover:bg-slate-200 p-1"><IoClose /></button>
                <input className="w-full bg-slate-800  border-2 border-slate-800 rounded-lg p-1 focus:outline-none focus:border-slate-700" type="text" placeholder="New List" />
                <button className="bg-slate-200 text-black hover:bg-slate-300 py-1 px-2 rounded-lg">Save</button>
              </div>}
              
              {!addingNewList && <li onClick={()=>setAddingNewList(true)} className="p-2 flex items-center gap-2 hover:cursor-pointer hover:bg-slate-600 rounded-lg"><MdOutlineAdd /> Add New List</li>}
            </ul>
          </div>

          <div className="text-sm ">
            <p className="text-xs font-bold mb-2">TAGS</p>
            <div className="flex flex-wrap gap-2 px-1">
              {Tags.map(tag => <TagElement key={tag}>{tag}</TagElement>)}
              {/* <TagElement>Tag 01</TagElement>
              <TagElement>Tag 01</TagElement>
              <TagElement>+ Add Tag</TagElement> */}
            </div>
            
          </div>
        </div>
        <div>
         {user ? <ul className="flex flex-col font-medium px-1 text-md">
              <li className="p-2 flex items-center gap-2"><IoMdOptions />Settings</li>
              <li onClick={handleSignout} className="p-2 flex items-center gap-2 hover:cursor-pointer hover:bg-slate-300"><MdOutlineLogout />Signout</li>
            </ul>:<button className="w-full border p-4 rounded-lg bg-slate-800 text-white font-semibold" onClick={()=>setUser({user:"Man"})}>Sign In</button>}
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;

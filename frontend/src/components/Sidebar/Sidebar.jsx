import React, { useState } from "react";
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

const Sidebar = () => {
  const [sidebarVisible,setSidebarVisible] = useState(true)

  const handleSidebar = () => {
    setSidebarVisible(!sidebarVisible)
    console.log(sidebarVisible)
  }
  return (<>
   <div className="w-[320px] h-screen bg-white p-6 font-sans text-gray-600">
      <div className="w-full h-full bg-stone-100/60 rounded-xl flex flex-col justify-between p-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h4 className="font-bold  text-slate-700 text-xl">Menu</h4>
            <div className="p-1 rounded-lg hover:bg-stone-200 " onClick={handleSidebar}><MdOutlineMenu className="text-2xl" /></div>
          </div>

          <div className="flex gap-2 items-center border p-1 rounded-lg">
            <IoMdSearch className="text-xl" />
            <input
              type="text"
              placeholder="Search"
              className=" w-[70%] inline bg-transparent  text-sm focus:outline-none"
            ></input>
          </div>

          <div className="text-sm border-b py-4">
            <p className="text-xs font-bold mb-2">TASKS</p>
            <ul className="flex flex-col font-medium px-1">
              <TaskItem><TbArrowsRight />Upcoming</TaskItem>
              <TaskItem><BsListCheck />Today</TaskItem>
              <TaskItem><BsCalendar3 />Calendar</TaskItem>
              <TaskItem><BsFillStickyFill />ticky Wall</TaskItem>
            </ul>
          </div>

          <div className="text-sm font-medium border-b py-4">
            <p className="text-xs font-bold mb-2">LISTS</p>
            <ul className="flex flex-col font-medium px-1">
              <ListItem>Personal</ListItem>
              <ListItem>Work</ListItem>
              <ListItem>List 1</ListItem>
              <li className="p-2 flex items-center gap-2  hover:bg-stone-200 rounded-lg"><MdOutlineAdd /> Add New List</li>
            </ul>
          </div>

          <div className="text-sm ">
            <p className="text-xs font-bold mb-2">TAGS</p>
            <div className="flex gap-2 px-1">
              <TagElement>Tag 01</TagElement>
              <TagElement>Tag 01</TagElement>
              <TagElement>+ Add Tag</TagElement>
            </div>
            
          </div>
        </div>
        <div>
          <ul className="flex flex-col font-medium px-1">
              <li className="p-2 flex items-center gap-2"><IoMdOptions />Settings</li>
              <li className="p-2 flex items-center gap-2"><MdOutlineLogout />Signout</li>
            </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
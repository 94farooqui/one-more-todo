import React, { useContext } from "react";
import { TaskDetailsContext } from "../../context/TaskDetailsContext";
import { IoCloseSharp } from "react-icons/io5";

const TaskDetails = () => {
  const { taskDetailsVisible, setTaskDetailsVisible } =
    useContext(TaskDetailsContext);
  return (
    <div className="p-4">
      <div className="bg-slate-100/50 p-6 rounded-lg font-poppins">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-stone-600">Task: </h2>
          <button
            className="text-2xl"
            onClick={() => setTaskDetailsVisible(false)}
          >
            <IoCloseSharp />
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-2 text-sm ">
          <div className="p-2 rounded-md border text-slate-500 font-semibold">
            <p>Renew Driver's license</p>
          </div>
          <div className="p-2 rounded-md border text-slate-500 font-semibold">
            <textarea
              className="bg-transparent resize-none w-full "
              placeholder="Description"
              rows="4"
            />
          </div>
          <table className="text-left ">
            <tr>
              <th className="font-normal">List</th>
              <td>
                <select className="p-1 border rounded-sm">
                  <option>Personal</option>
                  <option>Work</option>
                  <option>List 01</option>
                  <option>List 02</option>
                </select>
              </td>
            </tr>
            <tr>
            <th className="font-normal">Due date</th>
              <td>
                <input type='date' className="p-1 bg-transparent"/>
              </td>
            </tr>
            <tr>
            <th className="font-normal">Tags</th>
              <td>
                <div className="flex gap-2">
                <p className="px-2 py-1 text-sm bg-slate-200 rounded-md">Tag 01</p>
                <p className="px-2 py-1 text-sm bg-slate-200 rounded-md">+ Add tag</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;

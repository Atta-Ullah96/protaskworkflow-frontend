import  { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const initialTasks = [
  { id: 1, title: "Create Login Page", status: "todo", developer: "Ali", duration: "2 days" },
  { id: 2, title: "Fix API Bug", status: "in-progress", developer: "Zara", duration: "1 day" },
  { id: 3, title: "Deploy App", status: "completed", developer: "Ahmed", duration: "3 days" },
  { id: 4, title: "Add Dashboard Stats", status: "todo", developer: "Ali", duration: "2 days" }
];

const initialDevelopers = [
  { name: "Ali", specialization: "Frontend Developer" },
  { name: "Zara", specialization: "Backend Developer" },
  { name: "Ahmed", specialization: "Fullstack Developer" }
];

const statuses = ["todo", "in-progress", "completed"];

export default function ManagerDashboard() {

  // const [newTask, setNewTask] = useState({ title: "", developer: developers[0].name, status: "todo", duration: "" });
  // const [editTask, setEditTask] = useState(null);
  // const [newDev, setNewDev] = useState({ name: "", specialization: "" });
  // const [showAddTask, setShowAddTask] = useState(false);
  // const [showManageDevs, setShowManageDevs] = useState(false);













  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>

      <div className="flex flex-wrap gap-4 mb-6">
 

        <Link to="filter/task" className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer" >Search Task</Link>
        <Link to="add/task" className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer" >Add Task</Link>
        <Link to={"add/developer"} className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer" >Manage Developers</Link>
        <Link to={"create/team"} className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer" >Create Team</Link>
      </div>


      <Outlet />

      {/* {showAddTask && (
        <div className="bg-white p-6 border rounded mb-6">
          <h2 className="text-xl font-bold mb-4">Add New Task</h2>
          <input className="border p-2 w-full mb-2" placeholder="Title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
          <select className="border p-2 w-full mb-2" value={newTask.developer} onChange={(e) => setNewTask({ ...newTask, developer: e.target.value })}>
            {developers.map(dev => <option key={dev.name}>{dev.name}</option>)}
          </select>
          <select className="border p-2 w-full mb-2" value={newTask.status} onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}>
            {statuses.map(status => <option key={status}>{status}</option>)}
          </select>
          <input className="border p-2 w-full mb-2" placeholder="Duration" value={newTask.duration} onChange={(e) => setNewTask({ ...newTask, duration: e.target.value })} />
          <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleAddTask}>Add</button>
        </div>
      )} */}

      {/* {showManageDevs && (
        <div className="bg-white p-6 border rounded mb-6">
          <h2 className="text-xl font-bold mb-4">Manage Developers</h2>
          <input className="border p-2 w-full mb-2" placeholder="Developer Name" value={newDev.name} onChange={(e) => setNewDev({ ...newDev, name: e.target.value })} />
          <input className="border p-2 w-full mb-2" placeholder="Developer Email" value={newDev.name} onChange={(e) => setNewDev({ ...newDev, name: e.target.value })} />
          <input className="border p-2 w-full mb-2" placeholder="Developer Password" value={newDev.name} onChange={(e) => setNewDev({ ...newDev, name: e.target.value })} />
          <input className="border p-2 w-full mb-2" placeholder="Specialization" value={newDev.specialization} onChange={(e) => setNewDev({ ...newDev, specialization: e.target.value })} />
          
          <input className="border p-2 w-full mb-2" placeholder="Team" value={newDev.specialization} onChange={(e) => setNewDev({ ...newDev, specialization: e.target.value })} />
          <button className="bg-green-600 text-white px-4 py-2 rounded mb-4 cursor-pointer" onClick={handleAddDeveloper}>Add Developer</button>
          <ul>
            {developers.map(dev => (
              <li key={dev.name} className="flex justify-between items-center mb-2">
                <div>
                  <span className="font-medium">{dev.name}</span>
                  <span className="text-sm text-gray-500 ml-2">({dev.specialization})</span>
                </div>
                <button className="bg-red-500 text-white px-2 py-1 rounded  cursor-pointer " onClick={() => handleDeleteDeveloper(dev.name)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )} */}



      {/* {editTask && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow w-96">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <input className="border p-2 w-full mb-2" value={editTask.title} onChange={(e) => setEditTask({ ...editTask, title: e.target.value })} />
            <select className="border p-2 w-full mb-2" value={editTask.developer} onChange={(e) => setEditTask({ ...editTask, developer: e.target.value })}>
              {developers.map(dev => <option key={dev.name}>{dev.name}</option>)}
            </select>
            <select className="border p-2 w-full mb-2" value={editTask.status} onChange={(e) => setEditTask({ ...editTask, status: e.target.value })}>
              {statuses.map(status => <option key={status}>{status}</option>)}
            </select>
            <input className="border p-2 w-full mb-2" value={editTask.duration} onChange={(e) => setEditTask({ ...editTask, duration: e.target.value })} />
            <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2" onClick={handleUpdateTask}>Update</button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={() => setEditTask(null)}>Cancel</button>
          </div>
        </div>
      )} */}
    </div>
  );
}

import { useState, useMemo } from "react";
import {
  useAllTasksQuery
} from "../../redux/api/taskApi";

const statuses = ["todo", "progress", "completed"];

const FilterTask = () => {
  const { data, isLoading, error } = useAllTasksQuery();

  const tasks = data?.tasks || []; // safe fallback
  const [statusFilter, setStatusFilter] = useState("all");
  const [developerFilter, setDeveloperFilter] = useState("All");

  // Extract developers from task list (unique names)
  const developers = useMemo(() => {
    const devSet = new Set();
    tasks.forEach(task => devSet.add(task.developer));
    return Array.from(devSet);
  }, [tasks]);

  // Filter tasks based on selected filters
  const filteredTasks = tasks.filter(task => {
    const matchStatus = statusFilter === "all" || task.status === statusFilter;
    const matchDev = developerFilter === "All" || task.developer === developerFilter;
    return matchStatus && matchDev;
  });
  console.log(filteredTasks);
  

  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>Failed to load tasks.</p>;


  const getDaysLeft = (dueDateStr) => {
  if (!dueDateStr) return "N/A";

  const dueDate = new Date(dueDateStr);
  const today = new Date();

  // Zero out the time portion
  dueDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = dueDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays >= 0 ? diffDays : `Overdue by ${Math.abs(diffDays)}`;
};

  return (
    <div className="p-4">
      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded cursor-pointer"
        >
          <option value="all">All</option>
          {statuses.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>

        <select
          onChange={(e) => setDeveloperFilter(e.target.value)}
          className="border p-2 rounded cursor-pointer"
        >
          {["All", ...developers].map((dev) => (
            <option key={dev} value={dev}>{dev}</option>
          ))}
        </select>
      </div>

      {/* Task Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.map((task) => (
          <div key={task._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
            <p className="text-sm text-gray-600">Status: {task.status}</p>
            <p className="text-sm text-gray-600">Assigned To: {task?.assignedTo?.name}</p>
            <p className="text-sm text-gray-600">Duration: {  getDaysLeft(task.dueDate) + "days" }</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterTask;

import { Link } from 'react-router-dom';
import {
  useGetDeveloperTasksQuery,
  useGetDeveloperTeamQuery,
  useUpdateTaskStatusMutation
} from '../redux/api/developerApi';

export default function DeveloperDashboard() {
 

  const { data: tasks = [], isLoading: isTasksLoading } =
    useGetDeveloperTasksQuery();

    
  const { data: team, isLoading: isTeamLoading } =
    useGetDeveloperTeamQuery();
  
    
    
  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const handleDragStart = (e, task, source) => {
  
    e.dataTransfer.setData("task", JSON.stringify({ task, source }));
  };

  const handleDrop = async (e, target) => {
    const { task, source } = JSON.parse(e.dataTransfer.getData("task"));
  
    
    if (source === target) return;
    
    try {
    
      await updateTaskStatus({ taskId: task?._id, status: target });
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  // Group tasks by status
  const groupedTasks = {
    todo: [],
    progress: [],
    completed: [],
  };

  tasks?.tasks?.forEach(task => {
    if (groupedTasks[task.status]) {
      groupedTasks[task.status].push(task);
    }
  });

  const renderTasks = (status) => (
    <div
      className="w-full bg-gray-100 p-3 rounded shadow min-h-[150px]"
      onDrop={(e) => handleDrop(e, status)}
      onDragOver={handleDragOver}
    >
      <h2 className="text-lg font-bold capitalize mb-2">{status}</h2>
      {groupedTasks[status].map((task) => (
        <div
          key={task._id}
          draggable
          onDragStart={(e) => handleDragStart(e, task, status)}
          className="bg-white rounded shadow p-4 mb-2 cursor-move"
        >
          {task.title}
        </div>
      ))}
    </div>
  );

  if (isTasksLoading || isTeamLoading) return <p className="p-6">Loading...</p>;

  return (
    <>
    
      <Link to={"/update/password"} className= "absolute right-10 top-10 mt-10  mb-10 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition position-absolute rog" >Update password</Link>
    <div className="p-6 space-y-6">
      {team && (
        <div className="bg-white p-4 rounded shadow">
          <h1 className="text-xl font-bold mb-2">Your Team: {team?.teamName}</h1>
          <p className="text-sm text-gray-600">Team Members:  {team?.members?.map((member) => member.name) + ""}</p>
        </div>
      )}


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 mb-20">
        {renderTasks("todo")}
        {renderTasks("progress")}
        {renderTasks("completed")}
      </div>
    </div>
          </>
  );
}

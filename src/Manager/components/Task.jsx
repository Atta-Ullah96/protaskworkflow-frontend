// src/pages/Manager/Task.jsx
import { useEffect, useState } from 'react';
import {
   useCreateTaskMutation,

 useAllTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from '../../redux/api/taskApi';
import toast from 'react-hot-toast';


const Task = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
  
    status: 'todo',
    specialization:""
  });

  
  const [editId, setEditId] = useState(null);

  const { data: tasks = [], refetch: refetchTasks } = useAllTasksQuery();

  
  

  const [createTask ] = useCreateTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  useEffect(() => {
    refetchTasks();
  }, [tasks]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
      if (editId) {
      const {data} =   await updateTask({ id: editId, data: formData });
        toast.success(data.message)
    } else {
       const res =  await createTask(formData).unwrap();
       console.log(res);
       
         if (res.task?.assignedTo?.name) {
        toast.success(`Task assigned to ${res.task.assignedTo.name}`);
      } else {
        toast.success("Task created successfully");
      }
      }
      setFormData({ title: '', description: '', dueDate: '', specialization:"", status: '' });
      setEditId(null);
  } catch (error) {
      toast.error(error?.data?.message)
  }
  };

  const handleEdit = (task) => {
    setEditId(task._id);
    setFormData({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate?.split('T')[0],
      assignedTo: task.assignedTo?._id || '',
      status: task.status,
    });
  };

  const handleDelete = async (id) => {
   const {data} =  await deleteTask(id);
   toast.success(data.message)
   
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">{editId ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="specialization"
          value={formData.specialization }
          onChange={handleChange}
          className="border px-4 py-2 rounded"
          placeholder='task related to which field '
          required={!editId}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        >
          <option value="todo">Todo</option>
          <option value="progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <br />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 cursor-pointer py-2 rounded hover:bg-blue-700"
        >
          {editId ? 'Update Task' : 'Add Task'}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">All Tasks</h2>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="border-b py-2">Title</th>
            <th className="border-b py-2">Description</th>
            <th className="border-b py-2">Due Date</th>
            <th className="border-b py-2">Assigned To</th>
            <th className="border-b py-2">Status</th>
            <th className="border-b py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&  tasks?.tasks?.map((task) => (
            <tr key={task._id}>
              <td className="border-b py-2">{task.title}</td>
              <td className="border-b py-2">{task.description}</td>
              <td className="border-b py-2">{new Date(task.dueDate).toLocaleDateString()}</td>
              <td className="border-b py-2">{task.assignedTo?.name}</td>
              <td className="border-b py-2">{task.status}</td>
              <td className="border-b py-2 space-x-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="cursor-pointer bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="cursor-pointer bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;

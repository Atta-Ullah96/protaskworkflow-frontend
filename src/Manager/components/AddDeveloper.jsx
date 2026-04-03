import  { useState, useEffect } from 'react';
import { useAddDeveloperMutation, useGetAllDevelopersQuery, useDeleteDeveloperMutation, useUpdateDeveloperMutation } from '../../redux/api/mangerapi';
import toast from 'react-hot-toast';

const AddDeveloper = () => {
  const [formData, setFormData] = useState({ name: '', password: '', email: '', specialization: '' });
  const [editId, setEditId] = useState(null);

  const { data: developers = [], refetch } = useGetAllDevelopersQuery();
  const [addDeveloper] = useAddDeveloperMutation();
  const [deleteDeveloper] = useDeleteDeveloperMutation();
  const [updateDeveloper] = useUpdateDeveloperMutation();

  useEffect(() => {
    refetch();
  }, [developers]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
     const {data} =  await updateDeveloper({ id: editId, data: formData });
      
      
      toast.success(data.message)
    } else {
   const {data}=   await addDeveloper(formData);
      toast.success(data.message)
      
  }
    setFormData({ name: '', email: '', specialization: '' , password : '' });
    setEditId(null);
  };

  const handleEdit = (dev) => {
    setEditId(dev._id);
    setFormData({ name: dev.name, email: dev.email, specialization: dev.specialization , password:''});
  };

  const handleDelete = async (id) => {
   const {data} = await deleteDeveloper(id);
    toast.success(data.message)
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5 space-y-4">
        <h2 className="text-2xl font-bold">Manager Panel</h2>
        <nav className="space-y-2">
          <button className="block cursor-pointer w-full text-left hover:bg-blue-700 p-2 rounded">Add Developer</button>
         
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-semibold mb-6">{editId ? 'Edit Developer' : 'Add Developer'}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required={!editId}
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={formData.specialization}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-700 transition"
          >
            {editId ? 'Update Developer' : 'Add Developer'}
          </button>
        </form>

        <h2 className="text-2xl font-semibold mb-4">All Developers</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2">Name</th>
              <th className="border-b py-2">Email</th>
              <th className="border-b py-2">Specialization</th>
              <th className="border-b py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {developers.map((dev) => (
              <tr key={dev._id}>
                <td className="py-2 border-b">{dev.name}</td>
                <td className="py-2 border-b">{dev.email}</td>
                <td className="py-2 border-b">{dev.specialization}</td>
                <td className="py-2 border-b space-x-2">
                  <button
                    onClick={() => handleEdit(dev)}
                    className="bg-yellow-400 cursor-pointer text-white px-2 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(dev._id)}
                    className="bg-red-600 text-white cursor-pointer px-2 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddDeveloper;
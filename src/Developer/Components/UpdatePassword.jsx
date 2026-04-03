import { useUpdatePasswordMutation } from "../../redux/api/developerApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
  const [form, setForm] = useState({ currentPassword: "", newPassword: "" });
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.currentPassword || !form.newPassword) {
      return toast.error("Both fields are required");
    }

    try {
      const res = await updatePassword(form).unwrap();
      toast.success(res.message);
      setForm({ currentPassword: "", newPassword: "" });
    } catch (err) {
      toast.error(err?.data?.message || "Password update failed");
    }
  };

  return (
    <>

          <Link
          to="/developer"
          className="text-blue-600 hover:underline hover:text-blue-800 transition mt-10"
        >
          ⬅ Back to Dashboard
        </Link>
    
    <form onSubmit={handleSubmit} className="mt-20 mb-20 p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-4">Update Password</h2>
      <input
        name="currentPassword"
        type="password"
        value={form.currentPassword}
        onChange={handleChange}
        placeholder="Current Password"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        name="newPassword"
        type="password"
        value={form.newPassword}
        onChange={handleChange}
        placeholder="New Password"
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {isLoading ? "Updating..." : "Update Password"}
      </button>
    </form>
    </>
  );
};

export default UpdatePassword;

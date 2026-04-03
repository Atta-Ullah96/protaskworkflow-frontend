import { useEffect, useState } from "react";
import { useLoginManagerMutation } from "../redux/api/mangerapi.jsx";
import { useNavigate } from "react-router-dom";
import loginImage from "../images/login.png";
import toast from "react-hot-toast";
import { useLoginDeveloperMutation } from "../redux/api/developerApi.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from "../redux/slices/authslice.jsx";
const ManagerLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "", role:"" });
  const [login, { isLoading }] = useLoginManagerMutation();
  const [loginDeveloper] = useLoginDeveloperMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);

  useEffect(() => {
    if (auth?.user?.role) {
      navigate(auth?.user?.role === 'manager' ? '/manager' : '/developer');
    }
  }, [auth, navigate]);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let response;
    if (formData.role === 'manager') {
      response =  await login({ email: formData.email, password: formData.password , role:formData.role }).unwrap();
    } else if (formData.role === 'developer') {
      response =  await loginDeveloper({ email: formData.email, password: formData.password , role:formData.role }).unwrap();
    } else {
      toast.error('Please select a role');
      return;
    }
   

      dispatch(setCredentials({ user: response.user, token: response.token, role: response.role }));


    toast.success('Login successful');

    // Redirect based on role
  

  } catch (error) {
    toast.error(error?.data?.message || 'Login failed');
  }
};

  return (
    <div className="min-h-screen flex">
      {/* Left Side Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src={loginImage}
          alt="Login Visual"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
             Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="cursor-pointer w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Role</option>
              <option value="manager">Manager</option>
              <option value="developer">Developer</option>
            </select>

            <button
              type="submit"
              className=" cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManagerLogin;

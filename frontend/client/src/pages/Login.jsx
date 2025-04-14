import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';

function Login() {
  const [form, setForm] = useState({ email: '', password: '', role: 'student' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
   
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, form);
      const { token, role, name } = res.data;

  
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);


      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-6">
        <h2 className="text-2xl font-bold text-black text-center">Login</h2>

 
        <div className="flex items-center border-b-2 border-gray-300 mb-4">
          <FaEnvelope className="text-gray-500 mr-3" />
          <input
            className="w-full py-2 px-3 text-black bg-white focus:outline-none"
            type="email"
            placeholder="Email"
            required
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>

       
        <div className="flex items-center border-b-2 border-gray-300 mb-4">
          <FaLock className="text-gray-500 mr-3" />
          <input
            className="w-full py-2 px-3 text-black bg-white focus:outline-none"
            type="password"
            placeholder="Password"
            required
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
        </div>

       
        <div className="flex items-center border-b-2 border-gray-300 mb-6">
          <FaUserAlt className="text-gray-500 mr-3" />
          <select
            className="w-full py-2 px-3 text-black bg-white focus:outline-none"
            value={form.role}
            onChange={e => setForm({ ...form, role: e.target.value })}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>

      
        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

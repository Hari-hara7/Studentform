import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
   
    const name = localStorage.getItem("name");
    setStudentName(name || "Student");
  }, []);

  return (
    <div className="bg-white text-black min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-gray-100 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-black flex items-center space-x-2">
          <i className="fas fa-user-circle text-blue-500 text-3xl"></i>
          <span>Welcome, {studentName}</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          You're logged in as a student. Here, you can give feedback or report any problems with teachers.
        </p>
        
        <div className="mt-8">
          <Link 
            to="/feedback" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            <i className="fas fa-comments mr-2"></i>
            Go to Feedback Page
          </Link>
        </div>
        
        <div className="mt-6">
          <Link 
            to="/problem-feedback" 
            className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition duration-300 ease-in-out"
          >
            <i className="fas fa-exclamation-triangle mr-2"></i>
            Report a Problem
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

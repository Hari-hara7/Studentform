import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaComments, FaExclamationTriangle } from 'react-icons/fa';

function Dashboard() {
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    setStudentName(name || "Student");
  }, []);

  return (
    <div className="bg-white min-h-screen p-6 flex items-center justify-center">
      <div className="bg-black w-full max-w-3xl rounded-xl shadow-xl p-8 md:p-10 text-center text-white">
        
        {/* Welcome Section */}
        <div className="mb-6 flex flex-col items-center justify-center">
          <FaUserCircle className="text-white text-5xl mb-2" />
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome, {studentName}
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-300">
            You're logged in as a student. You can submit feedback or report problems here.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <Link 
            to="/feedback"
            className="w-full md:w-auto px-6 py-3 bg-white text-black rounded-lg border border-white hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
          >
            <FaComments className="mr-2" />
            Give Feedback
          </Link>

        
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

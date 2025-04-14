import { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/feedback`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setFeedbacks(res.data);
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="bg-white text-black min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center space-x-2">
        <i className="fas fa-comments text-blue-600"></i>
        <span>All Student Feedbacks</span>
      </h2>
      {feedbacks.length === 0 ? (
        <p className="text-xl">No feedback available.</p>
      ) : (
        feedbacks.map(fb => (
          <div key={fb._id} className="bg-black text-white p-6 shadow-md mb-4 rounded-lg">
            <p className="flex items-center">
              <i className="fas fa-user text-yellow-400 mr-2"></i>
              <strong>Student:</strong> {fb.studentId.name} ({fb.studentId.email})
            </p>
            <p className="flex items-center">
              <i className="fas fa-chalkboard-teacher text-green-400 mr-2"></i>
              <strong>Teacher:</strong> {fb.teacher}
            </p>
            <p className="flex items-center">
              <i className="fas fa-pencil-alt text-blue-500 mr-2"></i>
              <strong>Type:</strong> {fb.feedbackType}
            </p>
            <p className="flex items-center">
              <i className="fas fa-comment-dots text-gray-400 mr-2"></i>
              <strong>Message:</strong> {fb.message}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminPanel;

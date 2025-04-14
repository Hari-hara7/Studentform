import { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [form, setForm] = useState({ teacher: '', feedbackType: 'feedback', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/feedback`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Feedback submitted successfully!");
      setForm({ teacher: '', feedbackType: 'feedback', message: '' });
    } catch (error) {
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Submit Feedback</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Teacher Name Input */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="teacher">Teacher Name</label>
          <input 
            id="teacher"
            type="text" 
            placeholder="Enter Teacher's Name"
            required 
            value={form.teacher} 
            onChange={e => setForm({ ...form, teacher: e.target.value })} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Feedback Type Dropdown */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="feedbackType">Feedback Type</label>
          <select 
            id="feedbackType"
            value={form.feedbackType} 
            onChange={e => setForm({ ...form, feedbackType: e.target.value })} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="feedback">Feedback</option>
            <option value="problem">Problem</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="message">Your Message</label>
          <textarea 
            id="message"
            placeholder="Write your feedback or problem message here"
            rows="6" 
            required 
            value={form.message} 
            onChange={e => setForm({ ...form, message: e.target.value })} 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;

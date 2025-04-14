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
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white border border-black rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          📝 Submit Feedback
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Teacher Name */}
          <div>
            <label htmlFor="teacher" className="block text-black font-medium mb-2">
              Teacher Name
            </label>
            <input
              type="text"
              id="teacher"
              placeholder="Enter Teacher's Name"
              required
              value={form.teacher}
              onChange={e => setForm({ ...form, teacher: e.target.value })}
              className="w-full px-4 py-3 border border-black text-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Feedback Type */}
          <div>
            <label htmlFor="feedbackType" className="block text-black font-medium mb-2">
              Feedback Type
            </label>
            <select
              id="feedbackType"
              value={form.feedbackType}
              onChange={e => setForm({ ...form, feedbackType: e.target.value })}
              className="w-full px-4 py-3 border border-black text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="feedback">Feedback</option>
              <option value="problem">Problem</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-black font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Write your feedback or problem here..."
              rows="6"
              required
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 border border-black text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded-md hover:opacity-90 transition duration-300"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;

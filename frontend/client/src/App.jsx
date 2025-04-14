import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import FeedbackForm from './pages/FeedbackForm';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Redirect root ("/") to the Register page */}
        <Route path="/" element={<Register />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={
          <PrivateRoute role="student">
            <Dashboard />
          </PrivateRoute>
        } />

        <Route path="/feedback" element={
          <PrivateRoute role="student">
            <FeedbackForm />
          </PrivateRoute>
        } />

        <Route path="/admin" element={
          <PrivateRoute role="admin">
            <AdminPanel />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;

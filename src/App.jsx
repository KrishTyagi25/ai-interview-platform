import Landing from './pages/Landing'
import { Routes, Route } from "react-router-dom";
import ResumeUpload from './pages/ResumeUpload';
import InterviewSetup from './pages/InterviewSetup';
import Interview from './pages/Interview';
import Feedback from './pages/Feedback';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';


function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={<Landing />}
      />
      <Route 
        path="/resume"
        element={<ResumeUpload />}
      />
      <Route
      path="/setup"
      element={<InterviewSetup/>}
      />

      <Route 
      path="/interview/"
      element={<Interview/>}
      
      />
      <Route
      path="/feedback"
      element={<Feedback/>}
      />

      <Route
      path="/dashboard" 
      element={<Dashboard/>}
      
      />
      <Route
      path = "/profile"
      element={<Profile/>}
      />
      
       </Routes>)
} export default App
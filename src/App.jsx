import Landing from './pages/Landing'
import { Routes, Route } from "react-router-dom";
import ResumeUpload from './pages/ResumeUpload';
import InterviewSetup from './pages/InterviewSetup';
import { div } from 'framer-motion/client';
import Interview from './pages/Interview';
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
      
       </Routes>)
} export default App
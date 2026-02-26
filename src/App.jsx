import { useState } from 'react'
import Landing from './pages/Landing'
import { Routes, Route } from "react-router-dom";
import ResumeUpload from './pages/ResumeUpload';
function App() {
  return (
    <Routes>
      <Route path="/"
        element={<Landing />}
      />
      <Route path="/resume"
       element={<ResumeUpload />}
        /> </Routes>)
} export default App